## 合成可能性

### 背景①：材料探索空間の定義

#### 組成ベースの回帰モデル
- ◯傾向の可視化、定量化
- △熟練研究者の推定と同等、熟練者にとって旨味がない
- ✗合成可能性は度外視

#### 組成ベースの合成可能性予測モデル
- 不確実性は未知
- 既知物質と類似の化合物を発見可能
- 参考文献：A. Seko Phys. Rev. Mater., 2, 013805 (2018)

#### 組成のテンソル表現
- 推薦システム
- 単相/複相の分類モデル
- G. Deffrennes, Materials & Design 215 (2022) 110497
- 合成前に特性や合成可能性の期待値を出力

→ **結晶相の存在予測と不確実性に基づく探索点の提案ができるか？**

---

### 先行研究①：既知化合物の組成の行列/テンソル分解を用いた推薦システム
- A. Seko Phys. Rev. Mater., 2, 013805 (2018)
- 教師データ：ICSD
- テストデータ：ICDD、SpMat
- Tuckerテンソル分解の例
- 既知物質と類似の化合物を発見可能
- 後述の分類学習と異なり、y=1のみを用いた真の推薦システム

---

### 先行研究②：組成特徴量に基づく存在の有無の分類学習
- A. Seko et al., J. Chem. Phys. 148, 241719 (2018)
- y ∈ {1,0}：1は存在、0は存在しない
- 目的変数
- 説明変数：組成特徴量（詳細は割愛）
- 学習データ：
  - ICSDから部分占有構造を除外し、y=1とする
  - 整数比で表現できる化合物のみを対象
  - 上記以外の未知物質の組成をy=0とする
- コメント：
  - 予測の解釈が難しい
  - 実在化合物のみを対象としたテンソル分解の推薦システムが解釈しやすいかな？

---

### 先行研究③：分解エネルギーを指標とした化合物の存在有無の二値判別
- y ∈ {1,0}：1は合成可能、0は合成困難
- 目的変数
- 説明変数：組成特徴量（詳細は割愛）
- MPの分解エネルギーDE(E<sub>hull</sub>)
  - y=1 if DE ≤ 10meV atom<sup>-1</sup>
  - y=0 if DE > 10meV atom<sup>-1</sup>
- 教師データ：MP
- 勾配ブースティング決定木の高い性能
- 左：entries in MP、右：predicted y (probability)
- AUC 0.91：高い精度が出ている
- コメント：
  - 二値判別のコンセプトが解りやすいし、 論文も丁寧で大変読みやすい
  - DEを目的変数に用いることの難しさがある. 閾値の曖昧さや不確実性が見積もれない点, 競合相依存、複相共存や固溶を扱えない
  - 特にProbabilityとして出力した際の解釈が難しい. けど他にいい手も浮かばない

---

### 先行研究④：相図の効率的な探索
- K. Terayama, et al., Phys. Rev. Mater. 3, 033802 (2019)
- ラベルp、組成変数xの確率：P(p|x)
- Label Spreading methodで未探索点のラベルを予測
- argmax u(x)を次点の合成点とする
- サンプリングデータの中間点の相境界を効率的に探索
- 新物質探索と若干ニュアンスが異なる
- 後にGibbsの相律を取り入れた手法が提案：Scripta Materialia 208 (2022) 114335
- Lossの大きい点を探しに行く→相境界を重視

---

### 先行研究⑤：組成情報に基づく単相/複相の予測
- G. Deffrennes, Materials & Design 215 (2022) 110497
- Al-Cu-Mg-Si-Znから5C3 = 10通りの３元系の800 ºCの相平衡状態図を取得
- 組成点は2%刻みでCALPHADで相情報を計算（one-, two-, three-phases）
- 説明変数：magpie featureなど
- モデル：RF
- 特徴量を増やして良い性能
- 複相の予測精度が低い
- CALPHADで二元系から三元系へ外挿は性能が低いとのこと
- 分類器で予測：単相/二相共存は正しく予測、三相共存の予測は困難
- (1) 二元系からCALPHADの外挿：三元の新規相は見つからない
- (2) 分類器から予測された三元の単相領域
- この２つを満たす点が新規相とのこと
- コメント：予測についてのみ、不確実性については言及なし

---

### 背景②：材料探索空間を定義してみる
- 推薦システム・GNNベースの網羅的スクリーニングが有効
- 空間①：DB収録材料（ICSD、MP、…）
- 空間②：Stoichiometric関連材料
- 空間③：Non-stoichiometric関連材料
- 空間③'：未知構造
- 空間④：複相共存、合成困難

探索空間③と探索空間②に比重をおいた、合成可能性/不確実性に基づく・実験組成の提案ができると面白い

- アルゴ開発段階
- Database、Stoichiometry Analog、Non-stoichiometry、Known structures、Unexplored、Predicted by RS/GNN、Unknown structures、Chemical space、Unsynthesizable/Multi-phase

---

## XRDのパターン一致による相同定の文献

### CNNを用いたXRD認識
- XRDの認識にCNNを適用
- XRDに含まれる相の割合を存在確率として表現
- 面白いが、パラメーター調整が難しそう
- 新物質予測ではなく、実験データの解釈の高精度化に関するもの

### モデルアーキテクチャ
- 50個のCNNのアンサンブルを使用
- 各学習器：3つの畳み込み層（8、8、4フィルター）、カーネルサイズ5、ストライド2
- 最終層を平均化して離散確率分布を出力
- Adamオプティマイザーで10エポック学習
- ベイズ最適化でハイパーパラメータを最適化

### Ni-Co-Alの例
- 342サンプルのEDX測定を利用
- EDXデータから相の確率を構築
- XRDとEDXの独立分布から結合確率を形成

### NN+科学的知見（相律など）による相図作製
- agileFD（NMF+相律）の後継のイメージ


---

## 生成モデル関連

### iMatGen：3D voxel表現に基づくVAE
- 3D画像表現を用いた最初の生成モデル
- 課題：
  1. 材料構造への変換にユーザー定義の後処理が必要
  2. 結晶材料の単位胞サイズが3次元グリッドで立方的にスケール
  3. メモリ集約的で訓練時間が長い
  4. 画像は本質的に並進、回転、超格子不変ではない

### Point cloud表現
- "point cloud"の概念を利用して原子座標と格子定数から点とベクトルで構造を表現
- 入力が構造情報のままなので、構造生成が容易
- 二次元データなので、3次元のvoxelデータよりメモリ消費が抑えられる

---

### GAN研究（Mg-Mn-O三元系）
- 学習データ：MPからMg-Mn-Oの三元系112組成の1240構造を取得
- 構造の偏りを減らすためにrotation、supercell、translationを行ない各組成当たり1000構造を作製するまで実行
- 112組成に対して112,000構造を生成
- 疑問：特定の組成空間に特化したモデルを作らなければならないのか？

### iMatGenとGANの比較（二元系）
- V-O系のmeta stable (<200 meV/atom)構造は40%一致、60%不一致
- V<sub>3</sub>O<sub>4</sub>とV<sub>6</sub>O<sub>7</sub>に関してはGANが最安定構造を予測出来た

### 三元系での構造生成
- 133候補組成を対象
- 後のDFT計算コストを考えて31組成に限定（MP登録済み11件）
- 9300構造を作製（11組成inMP×300構造+20組成×300構造）
- DFT計算でE<sub>hull</sub> < 200meV/atom以下の構造を多く発見
- そのうち、80 meV/atom以下の合成可能構造は35個存在
- E<sub>hull</sub> < 5meV/atomかつMPに登録されていないMgMn<sub>4</sub>O<sub>8</sub>を発見
- コメント：結局安定構造は見つけられていない・・・

---

### Crystal constrained DCGAN (CCDCGAN)
- 趣旨：特性をフィードバックしながら構造生成を行う
- Deep convolutional GAN (DCGAN) + constraintモデルとcrystal constrained DCGAN (CCDCGAN) modelの比較
- DCGANには10<sup>3</sup>の入力構造が求められる
- ターゲットとするBi-Se系はMPに17構造しかない
- 二元系の10981prototype構造を取得して20原子以下と格子定数10Å以下をScreening→9810構造を入力データとした
- 格子定数と原子座標をvoxel空間で表記；2D結晶グラフにエンコード
- 入力DBには7種の実験的に報告された構造と155の安定構造（E<sub>hull</sub> < 100 meV/atom）と707の準安定構造（E<sub>hull</sub> < 200 meV）

### DCGAN結果
- DCGANで2832構造を生成；476/2832が非等価な構造
- DCGANでLatent-space（潜在空間）の2D結晶グラフを特徴量としてformation energyを回帰学習（CNN）
- 結局最安定構造は見つかっていない・・・
- USPEXと同じ精度のイメージ


---

### データベースと表現方法
- International Crystal Structure Database (ICSD)
- Materials Project (MP)
- Open Quantum Materials Database
- AtomicFLOW for materials discovery
- 指紋法：材料の性質、結晶グラフ、Atom2Vec、Ewald sum matrix、Generalized Coulomb matrix、partial radial distribution function
- しかし、無機固体材料の指紋（表現）が表現から材料へ可逆的であることは実証されていない


---

### 二段階AE
- 1st step：image finger print（画像処理）
- 2nd step：E<sub>hull</sub>の二値判別を学習
- t-SNE空間でランダムサンプリングとベイズサンプリングで安定材料発見効率の比較
- 遺伝アルゴとの効率比較→効率高い
- 一方で最安定構造は出ていない…
- 結局、それらしい構造を生成しているだけ？


---

## AFLOWの構造prototype判別機能

### 概要
- 対称性に重きを置いて構造の一致を見る
- オンライン利用+一部API？
- プログラムも公開されているみたい
- オンラインを利用してみたが、フッ化物の構造はPrototypeが見つからなかった
- 現状、1000個のprototypeが登録されている

### Aflowで遊んで見る
- インストール：http://aflow.org/install-aflow/#customizing_aflow
- aflow --protos >prototype_list.txt；prototypeのリストを保存
- 実行例：
  - YourCustomFileName_CollCode281.cif → AFLOW label：A2B6C_hP9_164_d_i_a
  - YourCustomFileName_CollCode285.cif → AFLOW label：AB4C_tP6_123_b_eg_c
  - YourCustomFileName_CollCode308.cif → AFLOW label：A2B_mC48_15_4f_2f
  - YourCustomFileName_CollCode389.cif → AFLOW label：A4BC_oP24_60_2d_b_c
- Stoichiometryの構造は正しくprototypeが出力された
- Nonstoichiometryの構造はエラーがでた

---

## 組成の類似度：超重要

### Earth Mover's Distance (EMD)
- Euclid distanceではなく、Earth Mover's Distance (EMD)を用いて組成の類似度を定義
- EMDはヒストグラムや確率分布などのデータ間の非類似度として利用可能
- 特徴量空間としてModified Pettifer numberを利用

### データセット
- ICSDから188,631のcif
- 842個のイオン伝導体の組成（and構造）を準備

### 結果
- EMDで類似組成をICSDで検索：21人の研究者が合致するか判断
  1. EMDで528の化合物が完全or僅かな組成ズレのもと、ICSDレポジトリと合致
  2. 残りの254の化合物が元素置換や構造が類似したもの
  3. 60の化合物が合致せず（レポジトリに単純に存在しない？）
- 距離1以下のcriteriaのもと、5.7%のF/Pレート

### 次元削減と可視化
- 二元系化合物でEMD尺度の多次元空間をUMAPを用いて次元削減
- 特徴量はmodified Pettifor number
- クラスター解析はDBSCANで実施
- 原子番号の特徴量+EMDはうまくクラスターが別れない
- メンデレーエフ数なども加味したが、modified Pettifor numberが最もよくクラスターを分類してくれる
- Magpie特徴量+ユークリッド距離もうまくクラスターが別れない

### UMAP vs PCA
- ICSD全てに対してModified Pettifor numberの特徴量でEMDで次元削減
- 電気陰性度の標準偏差から、ionicかcovalentをカラースケールでプロット
- 元のEMD距離と次元削減後の空間中のユーグリッド距離のPearson相関係数を比較
- UMAPは歪んだ空間のため、次元削減後のユーグリッド距離そのものは回帰学習の特徴量として使うべきではない
- 仮に高次元（5次元）まで使用したとしても意味がない

### まとめ
- 教師なしのクラスター解析やドメインを可視化したいなら：UMAP + 密度ベースのクラスター解析（DBSCAN）
- 非類似度を特徴量として使いたいなら：PCAで次元削減して主成分1~3（…10）を使うべき
- ソース：https://github.com/lrcfmd/ElMD/
- 特徴量として色々選べる。上の文献はmodified_pettifierを利用
- EDMで非類似度を定義

---

## 局所構造特徴量

### Local structure order parameters (LoStOPs)
- 局所的な配位構造の定義手法を提案
- LoStOPsを利用して局所構造特徴量を作製し、61の既知の局所構造と40の一般的な結晶構造の類似度を定義
- MPに登録された70,000件の構造間の構造類似度評価指標を作製

### 利用可能なツール
- 全ての手法とアルゴリズムはpymatgenのlocal_envモジュールとmatminerのfeaturizersモジュールで自由に利用可能
- Matminer：https://hackingmaterials.lbl.gov/matminer/
- pymatgen：https://pymatgen.org/pymatgen.analysis.local_env.html?highlight=zimmermann
- 難解なので詳細は飛ばすが、最終的にはCrystalNNでよいとのこと

### 構造ファミリー研究
- O. Muller and R. Roy, The Major Ternary Structural Families, Springer-Verlag, Berlin, Germany, 1st edn, 1974
- 主な三元系構造ファミリーを使用
- 歪んだスピネルであるhausmanniteを削除するなど、一部改変
- MPから空間群と組成式が一致する構造を抽出
- structure matcher(pmg)で構造が合致するか確認
- 6258構造with40prototype-structureを生成（MPの約10%に相当）

### 最適な組み合わせ
1. 構造fingerprintを使用
2. cosine距離を使用
3. 構造fingerprintはサイトfingerprintのmean、std dev、max、min、…を組み合わせて117種類を作製
4. 40の構造系の数に対応して重みづけをかけた（データ偏りをなくすため）
- 最高性能の組み合わせ（OVL: 1.9%）：CrystalNNFingerprint with "ops" preset、全ての追加フラグをオフ、統計タイプとしてmeanとmaximum、比較メトリックとしてdistance