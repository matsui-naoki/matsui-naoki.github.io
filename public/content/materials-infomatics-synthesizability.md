## 合成可能性

### 背景①：材料探索空間の定義

#### 組成ベースの回帰モデル

組成ベースの回帰モデルは、傾向の可視化や定量化に優れています。しかしその予測は熟練研究者の推定と同等であり、熟練者にとっては旨味がありません。さらに、合成可能性が度外視されている点が大きな課題です。

#### 組成ベースの合成可能性予測モデル

組成ベースの合成可能性予測モデル（参考文献：A. Seko Phys. Rev. Mater., 2, 013805 (2018)）は、既知物質と類似の化合物を発見できますが、不確実性は未知です。

#### 組成のテンソル表現

組成のテンソル表現を用いた推薦システムや、単相/複相の分類モデル（G. Deffrennes, Materials & Design 215 (2022) 110497）は、合成前に特性や合成可能性の期待値を出力できます。

→ **結晶相の存在予測と不確実性に基づく探索点の提案ができるか？**

---

### 先行研究①：既知化合物の組成の行列/テンソル分解を用いた推薦システム

A. Seko（Phys. Rev. Mater., 2, 013805 (2018)）は、既知化合物の組成の行列/テンソル分解を用いた推薦システムを提案しています。教師データにはICSDを、テストデータにはICDDとSpMatを用いており、Tuckerテンソル分解の例が示されています。この手法では既知物質と類似の化合物を発見可能です。後述の分類学習と異なり、y=1のみを用いた真の推薦システムである点が特徴です。

---

### 先行研究②：組成特徴量に基づく存在の有無の分類学習

A. Seko et al.（J. Chem. Phys. 148, 241719 (2018)）は、組成特徴量に基づいて化合物の存在の有無を分類学習しています。目的変数は y ∈ {1,0} で、1は存在、0は存在しないことを表し、説明変数は組成特徴量です（詳細は割愛します）。学習データとしては、ICSDから部分占有構造を除外したものを y=1 とし、整数比で表現できる化合物のみを対象として、それ以外の未知物質の組成を y=0 としています。ただし、予測の解釈が難しい点が課題であり、実在化合物のみを対象としたテンソル分解の推薦システムのほうが解釈しやすいかもしれません。

---

### 先行研究③：分解エネルギーを指標とした化合物の存在有無の二値判別

この研究では、y ∈ {1,0}（1は合成可能、0は合成困難）を目的変数とし、組成特徴量を説明変数としています（詳細は割愛します）。判別指標にはMaterials Project（MP）の分解エネルギーDE（E<sub>hull</sub>）を用い、DE ≤ 10 meV atom<sup>-1</sup> であれば y=1、DE > 10 meV atom<sup>-1</sup> であれば y=0 とします。教師データはMPで、勾配ブースティング決定木が高い性能を示しています。図の左はentries in MP、右はpredicted y（probability）であり、AUC 0.91と高い精度が出ています。二値判別のコンセプトが解りやすく、論文も丁寧で大変読みやすい一方、DEを目的変数に用いることの難しさもあります。すなわち、閾値の曖昧さや不確実性が見積もれない点、競合相依存である点、複相共存や固溶を扱えない点です。特にProbabilityとして出力した際の解釈が難しいのですが、他に良い手も浮かばないところです。

---

### 先行研究④：相図の効率的な探索

K. Terayama, et al.（Phys. Rev. Mater. 3, 033802 (2019)）は、相図の効率的な探索手法を提案しています。ラベルpと組成変数xの確率P(p|x)を考え、Label Spreading methodで未探索点のラベルを予測し、argmax u(x)を次点の合成点とすることで、サンプリングデータの中間点の相境界を効率的に探索できます。Lossの大きい点を探しに行くため相境界を重視する手法であり、新物質探索とは若干ニュアンスが異なります。後に、Gibbsの相律を取り入れた手法も提案されています（Scripta Materialia 208 (2022) 114335）。

---

### 先行研究⑤：組成情報に基づく単相/複相の予測

G. Deffrennes（Materials & Design 215 (2022) 110497）は、組成情報に基づく単相/複相の予測を行なっています。Al-Cu-Mg-Si-Znから5C3 = 10通りの三元系について800 ºCの相平衡状態図を取得し、組成点は2%刻みでCALPHADにより相情報（one-, two-, three-phases）を計算しています。説明変数はmagpie featureなど、モデルはRFで、特徴量を増やすことで良い性能が得られていますが、複相の予測精度は低いままです。また、CALPHADで二元系から三元系へ外挿すると性能が低いとのことです。分類器による予測では、単相/二相共存は正しく予測できる一方、三相共存の予測は困難でした。この研究では、(1)二元系からのCALPHADの外挿では三元の新規相は見つからないこと、(2)分類器から三元の単相領域が予測されること、この2つを満たす点が新規相であるとしています。ただし議論は予測についてのみで、不確実性については言及がありません。

---

### 背景②：材料探索空間を定義してみる

材料探索空間を定義すると、推薦システムやGNNベースの網羅的スクリーニングが有効になります。空間①はDB収録材料（ICSD、MP、…）、空間②はStoichiometric関連材料、空間③はNon-stoichiometric関連材料、空間③'は未知構造、空間④は複相共存や合成困難な領域です。

探索空間③と探索空間②に比重をおいた、合成可能性/不確実性に基づく実験組成の提案ができると面白いと考えており、現在はアルゴリズムの開発段階です。キーワードとしては、Database、Stoichiometry Analog、Non-stoichiometry、Known structures、Unexplored、Predicted by RS/GNN、Unknown structures、Chemical space、Unsynthesizable/Multi-phaseが挙げられます。

---

## XRDのパターン一致による相同定の文献

### CNNを用いたXRD認識

XRDの認識にCNNを適用し、XRDに含まれる相の割合を存在確率として表現する研究があります。面白い試みですが、パラメーター調整は難しそうです。なお、これは新物質予測ではなく、実験データの解釈の高精度化に関するものです。

### モデルアーキテクチャ

モデルには50個のCNNのアンサンブルが使用されています。各学習器は3つの畳み込み層（8、8、4フィルター）を持ち、カーネルサイズは5、ストライドは2です。最終層を平均化して離散確率分布を出力します。学習はAdamオプティマイザーで10エポック行われ、ハイパーパラメータはベイズ最適化で最適化されています。

### Ni-Co-Alの例

Ni-Co-Alの例では、342サンプルのEDX測定を利用してEDXデータから相の確率を構築し、XRDとEDXの独立分布から結合確率を形成しています。

### NN+科学的知見（相律など）による相図作製

NNに相律などの科学的知見を組み合わせた相図作製は、agileFD（NMF+相律）の後継のイメージです。

---

## 生成モデル関連

### iMatGen：3D voxel表現に基づくVAE

iMatGenは、3D画像表現を用いた最初の生成モデルです。課題としては、材料構造への変換にユーザー定義の後処理が必要なこと、結晶材料の単位胞サイズが3次元グリッドで立方的にスケールすること、メモリ集約的で訓練時間が長いこと、そして画像は本質的に並進・回転・超格子不変ではないことが挙げられます。

### Point cloud表現

Point cloud表現では、"point cloud"の概念を利用して、原子座標と格子定数から点とベクトルで構造を表現します。入力が構造情報のままであるため構造生成が容易であり、二次元データなので3次元のvoxelデータよりメモリ消費が抑えられます。

---

### GAN研究（Mg-Mn-O三元系）

Mg-Mn-O三元系を対象としたGAN研究では、学習データとしてMPからMg-Mn-O三元系112組成の1240構造を取得しています。構造の偏りを減らすためにrotation、supercell、translationを行ない、各組成当たり1000構造を作製するまで実行することで、112組成に対して112,000構造を生成しています。特定の組成空間に特化したモデルを作らなければならないのか、という疑問は残ります。

### iMatGenとGANの比較（二元系）

二元系での比較では、V-O系のmeta stable（<200 meV/atom）構造は40%が一致し、60%が不一致でした。V<sub>3</sub>O<sub>4</sub>とV<sub>6</sub>O<sub>7</sub>に関しては、GANが最安定構造を予測できました。

### 三元系での構造生成

三元系での構造生成では、133候補組成を対象とし、後のDFT計算コストを考えて31組成（MP登録済み11件）に限定しています。9300構造（MP登録済み11組成×300構造+20組成×300構造）を作製し、DFT計算によりE<sub>hull</sub> < 200 meV/atom以下の構造を多く発見しました。そのうち80 meV/atom以下の合成可能構造は35個存在し、さらにE<sub>hull</sub> < 5 meV/atomかつMPに登録されていないMgMn<sub>4</sub>O<sub>8</sub>も発見されています。ただし、結局のところ安定構造は見つけられていません。

---

### Crystal constrained DCGAN (CCDCGAN)

CCDCGANの趣旨は、特性をフィードバックしながら構造生成を行う点にあり、Deep convolutional GAN（DCGAN）+constraintモデルとcrystal constrained DCGAN（CCDCGAN）モデルが比較されています。DCGANには10<sup>3</sup>オーダーの入力構造が求められますが、ターゲットとするBi-Se系はMPに17構造しかありません。そこで二元系の10981のprototype構造を取得し、20原子以下かつ格子定数10 Å以下という条件でScreeningした9810構造を入力データとしています。格子定数と原子座標はvoxel空間で表記され、2D結晶グラフにエンコードされます。入力DBには、7種の実験的に報告された構造と、155の安定構造（E<sub>hull</sub> < 100 meV/atom）、707の準安定構造（E<sub>hull</sub> < 200 meV）が含まれます。

### DCGAN結果

DCGANでは2832構造が生成され、そのうち476構造が非等価な構造でした。さらに、Latent-space（潜在空間）の2D結晶グラフを特徴量として、formation energyをCNNで回帰学習しています。ただし、結局最安定構造は見つかっておらず、USPEXと同じ精度のイメージです。

---

### データベースと表現方法

データベースとしては、International Crystal Structure Database（ICSD）、Materials Project（MP）、Open Quantum Materials Database、AtomicFLOW for materials discoveryなどがあります。指紋法としては、材料の性質、結晶グラフ、Atom2Vec、Ewald sum matrix、Generalized Coulomb matrix、partial radial distribution functionなどが用いられます。しかし、無機固体材料の指紋（表現）が、表現から材料へ可逆的であることは実証されていません。

---

### 二段階AE

二段階のオートエンコーダを用いる手法では、1st stepでimage finger print（画像処理）を行い、2nd stepでE<sub>hull</sub>の二値判別を学習します。t-SNE空間でランダムサンプリングとベイズサンプリングの安定材料発見効率が比較されているほか、遺伝的アルゴリズムとの効率比較でも高い効率が示されています。一方で最安定構造は出ておらず、結局それらしい構造を生成しているだけではないか、という疑問も残ります。

---

## AFLOWの構造prototype判別機能

### 概要

AFLOWの構造prototype判別機能は、対称性に重きを置いて構造の一致を見るものです。オンライン利用に加えて一部APIも提供されているようで、プログラムも公開されているようです。現状1000個のprototypeが登録されていますが、オンライン版を利用してみたところ、フッ化物の構造はPrototypeが見つかりませんでした。

### Aflowで遊んで見る

インストール方法は http://aflow.org/install-aflow/#customizing_aflow を参照してください。aflow --protos >prototype_list.txt を実行すると、prototypeのリストを保存できます。実行例は以下のとおりです。

- YourCustomFileName_CollCode281.cif → AFLOW label：A2B6C_hP9_164_d_i_a
- YourCustomFileName_CollCode285.cif → AFLOW label：AB4C_tP6_123_b_eg_c
- YourCustomFileName_CollCode308.cif → AFLOW label：A2B_mC48_15_4f_2f
- YourCustomFileName_CollCode389.cif → AFLOW label：A4BC_oP24_60_2d_b_c

Stoichiometryの構造は正しくprototypeが出力された一方で、Nonstoichiometryの構造はエラーが出ました。

---

## 組成の類似度：超重要

### Earth Mover's Distance (EMD)

組成の類似度は、Euclid distanceではなくEarth Mover's Distance（EMD）を用いて定義します。EMDはヒストグラムや確率分布などのデータ間の非類似度として利用可能であり、特徴量空間としてはModified Pettifor numberを利用します。

### データセット

データセットとしては、ICSDから188,631のcifを取得し、842個のイオン伝導体の組成（および構造）を準備しています。

### 結果

EMDで類似組成をICSDで検索し、21人の研究者が合致するかどうかを判断しました。その結果、528の化合物は完全もしくは僅かな組成ズレのもとでICSDレポジトリと合致し、残りの254の化合物は元素置換や構造が類似したものであり、60の化合物は合致しませんでした（レポジトリに単純に存在しないと考えられます）。距離1以下のcriteriaのもとで、F/Pレートは5.7%でした。

### 次元削減と可視化

二元系化合物について、EMD尺度の多次元空間をUMAPを用いて次元削減しています。特徴量はmodified Pettifor numberで、クラスター解析はDBSCANで実施されています。原子番号の特徴量+EMDではうまくクラスターが別れず、メンデレーエフ数なども加味した結果、modified Pettifor numberが最もよくクラスターを分類してくれます。なお、Magpie特徴量+ユークリッド距離でもうまくクラスターは別れません。

### UMAP vs PCA

ICSD全てに対して、Modified Pettifor numberの特徴量を用いたEMDで次元削減を行なった比較です。電気陰性度の標準偏差から、ionicかcovalentかをカラースケールでプロットし、元のEMD距離と次元削減後の空間中のユーグリッド距離のPearson相関係数を比較しています。UMAPは歪んだ空間となるため、次元削減後のユーグリッド距離そのものを回帰学習の特徴量として使うべきではありません。仮に高次元（5次元）まで使用したとしても意味がありません。

### まとめ

教師なしのクラスター解析やドメインの可視化が目的であれば、UMAPと密度ベースのクラスター解析（DBSCAN）の組み合わせが適しています。一方、非類似度を特徴量として使いたい場合は、PCAで次元削減して主成分1~3（…10）を使うべきです。ソースは https://github.com/lrcfmd/ElMD/ で公開されており、特徴量は色々と選べますが、上の文献はmodified_pettifierを利用し、EMDで非類似度を定義しています。

---

## 局所構造特徴量

### Local structure order parameters (LoStOPs)

LoStOPsは、局所的な配位構造の定義手法として提案されたものです。LoStOPsを利用して局所構造特徴量を作製し、61の既知の局所構造と40の一般的な結晶構造の類似度を定義しています。さらに、MPに登録された70,000件の構造間の構造類似度評価指標も作製されています。

### 利用可能なツール

全ての手法とアルゴリズムは、pymatgenのlocal_envモジュールとmatminerのfeaturizersモジュールで自由に利用可能です（Matminer：https://hackingmaterials.lbl.gov/matminer/ 、pymatgen：https://pymatgen.org/pymatgen.analysis.local_env.html?highlight=zimmermann ）。内容は難解なので詳細は飛ばしますが、最終的にはCrystalNNでよいとのことです。

### 構造ファミリー研究

O. Muller and R. Roy, The Major Ternary Structural Families（Springer-Verlag, Berlin, Germany, 1st edn, 1974）の主な三元系構造ファミリーを使用し、歪んだスピネルであるhausmanniteを削除するなど一部改変しています。MPから空間群と組成式が一致する構造を抽出し、structure matcher（pmg）で構造が合致するかを確認することで、40のprototype-structureをもつ6258構造（MPの約10%に相当）を生成しています。

### 最適な組み合わせ

1. 構造fingerprintを使用
2. cosine距離を使用
3. 構造fingerprintはサイトfingerprintのmean、std dev、max、min、…を組み合わせて117種類を作製
4. 40の構造系の数に対応して重みづけをかけた（データ偏りをなくすため）

最高性能の組み合わせ（OVL: 1.9%）は、CrystalNNFingerprint with "ops" presetで全ての追加フラグをオフとし、統計タイプとしてmeanとmaximum、比較メトリックとしてdistanceを用いたものでした。
