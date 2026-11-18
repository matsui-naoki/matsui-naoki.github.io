## Graph Neural Network (GNN)

### CGCNN（Crystal Graph Convolutional Neural Network）

CGCNNは、T. Xieらが2017年から2018年にかけて発表した、グラフニューラルネットワークを結晶構造へ適用した手法です。2017年以降のマテリアルズ・インフォマティクス分野のホットトピックとなっており、M3GNet、Matlantis、GNoME等もこの延長線上に位置づけられます。その意味で、CGCNNはプロトタイプであると同時にベンチマークとしての役割も担っています。

### アーキテクチャ

グラフはノード（原子）とエッジ（結合）から構成されます。原子は族、周期、半径、電荷などの特徴量ベクトルとして、結合は距離ベクトルとして表現されます。ネットワーク本体は畳み込み層、プーリング層、全結合層から構成されます。

### 応用

応用先としては、全エネルギー、生成エネルギー、分解エネルギー、バンドギャップ等のバルク物性の回帰・分類に加えて、力（force）、応力テンソル、欠陥生成エネルギー等のサイトごとの特性の回帰が挙げられます。さらに、これらの技術は汎用ポテンシャルへと展開されています。

### CGCNNの詳細

ここでは原著論文（T. Xie, J. C. Grossman, Crystal Graph Convolutional Neural Networks for an Accurate and Interpretable Prediction of Material Properties, Phys. Rev. Lett., 120, 145301, 2018）に沿って、基礎的なアーキテクチャを整理します。図は原著論文を参照してください。

#### ノード、エッジの定義と入力特徴量

隣接ノードjの定義には、(1) 原子間距離d<sub>ij</sub> ≤ 6 Å、(2) d<sub>ij</sub> ≤ r<sub>cov,i</sub> + r<sub>cov,j</sub> + 0.25 Å（r<sub>cov</sub>は共有結合半径）、(3) i–jがVoronoi多面体の面を共有する、といった方法があります。また、数の閾値として最近接の12個を隣接ノードとした場合も、同等の性能が出るとのことです。

ノード特徴量ベクトルv<sub>i</sub>は、族、周期、電気陰性度、共有結合半径、価電子数、第一イオン化エネルギー、電子親和力、ブロック、原子体積などをOne-hot表現にしたものです。連続値の特徴量（半径など）は10カテゴリに分割して表します。なお、ランタノイドとアクチノイドは別の族として扱います。エッジ特徴量ベクトルu<sub>(i,j)k</sub>には原子間距離を使い、これも10カテゴリに分割します。ここでkは、周期境界条件のもとでi–j間のk番目の結合を表します。

#### 畳み込み層

畳み込み層では、隣接ノードの特徴量とエッジの特徴量を、自己ノードの特徴量ベクトルに反映させます。最も単純な畳み込み関数（Conv1）は次の形です。

v<sub>i</sub><sup>(t+1)</sup> = g[(Σ<sub>j,k</sub> v<sub>j</sub><sup>(t)</sup> ⊕ u<sub>(i,j)k</sub>) W<sub>c</sub><sup>(t)</sup> + v<sub>i</sub><sup>(t)</sup> W<sub>s</sub><sup>(t)</sup> + b<sup>(t)</sup>]

ここで⊕はベクトルの結合（concatenate）、W<sub>c</sub>は畳み込みの重み行列、W<sub>s</sub>は自己ノードの重み行列、bはバイアス、gは非線形の活性化関数です。複数の構造を学習する場合も、重み行列は全構造で共通です。この形では全ての隣接ノードに同じ重み行列を適用するため性能が低く、生成エネルギーE<sub>f</sub>のMAEは0.108 eV/atomでした。

そこで改良した畳み込み関数（Conv2）では、自己ノード、隣接ノード、エッジのベクトルを結合したz<sub>(i,j)k</sub> = v<sub>i</sub> ⊕ v<sub>j</sub> ⊕ u<sub>(i,j)k</sub>を使い、次のように更新します。

v<sub>i</sub><sup>(t+1)</sup> = v<sub>i</sub><sup>(t)</sup> + Σ<sub>j,k</sub> σ(z<sub>(i,j)k</sub> W<sub>f</sub> + b<sub>f</sub>) ⊙ g(z<sub>(i,j)k</sub> W<sub>s</sub> + b<sub>s</sub>)

σはシグモイド関数、⊙はアダマール積（要素ごとの積）です。シグモイド関数を通した項がゲートの役割を果たし、隣接ノードやエッジごとに異なる重みを割り当てて重要な情報を取り出します。また、自己ノードv<sub>i</sub>を足し込む形にしたことで学習が安定すると考えられます。この改良でE<sub>f</sub>のMAEは0.108から0.039 eV/atomに改善しました。論文によると、特徴量や層の数といったハイパーパラメーターよりも、畳み込み層の設計の方が性能に大きく効きます。また、学習曲線を見る限り、教師データは10<sup>4</sup>程度は必要そうです。

畳み込みを繰り返して自己ノードの特徴量を更新するたびに、第二隣接以降の情報も自己ノードに反映されていきます。結果として、モデルはより長距離の構造を学習することになります。

#### プーリング層と学習

プーリング層では、全ノードの特徴量ベクトルを平均して、結晶全体を表す1本のベクトル（結晶ベクトル）にします。その後、全結合層を経て物性値を出力します。プーリング層は予測に重要な部分ですが、それ自体にはハイパーパラメーターはありません。

隠れ層は、プーリング前に置くL<sub>1</sub>と、プーリング後に置くL<sub>2</sub>があります。結晶全体の物性を学習するときはL<sub>2</sub>のみを使い、サイトエネルギーを学習するときはL<sub>1</sub>のみを使います。ハイパーパラメーター（層の数、特徴量ベクトルの長さ、正則化項、学習率など）は学習の枠組みを決めるもので、重み行列は含まれません。ハイパーパラメーターはグリッドサーチで最適化し、重み行列は確率的勾配降下法で更新します。

#### サイトエネルギーへの拡張

続報（T. Xie, J. C. Grossman, Hierarchical visualization of materials space with graph convolutional neural networks, J. Chem. Phys., 149, 174111, 2018, https://doi.org/10.1063/1.5047803 ）では、基本的なアーキテクチャはCGCNNと同じまま、次の2点を変更しています。

1. エッジ特徴量に、原子間距離をガウス関数で展開したベクトルu<sub>(i,j)k</sub>[t] = exp(−(d<sub>(i,j)k</sub> − μ<sub>t</sub>)<sup>2</sup>/σ<sup>2</sup>)（μ<sub>t</sub> = t · 0.2 Å、t = 0, 1, …, 40、σ = 0.2 Å）を使います。原子間距離を0.2 Å幅で40区間に分け、各区間にある確からしさを特徴量にするイメージです
2. K回の畳み込みを経たノード特徴量ベクトルを線形変換してサイトエネルギーE<sub>i</sub> = v<sub>i</sub><sup>(K)</sup>W<sub>l</sub> + b<sub>l</sub>とし、その平均E = (1/n) Σ<sub>i</sub> E<sub>i</sub>で全エネルギーを表します

生成エネルギーのMAEは0.042 eV/atomで、CGCNNの0.039 eV/atomよりわずかに劣りますが、これは入力ノード特徴量を元素のOne-hot表現にしたためと考えられます。学習データ数に対する誤差の減り方は比較的直線的で、10<sup>4</sup>程度の訓練データでも不足感は否めません。

この論文の面白い点は、学習後のノード特徴量ベクトル（64次元）がそのサイト周辺の環境を反映していることを利用し、t-SNEで二次元に圧縮して元素や構造の分布を可視化している点です。これは一種の「物質空間（material space）」として機能し、サイトエネルギーと組み合わせると不安定なサイトを特定できます。欠陥サイトの特定にも役立ちそうです。なお、結晶全体の特徴量ベクトル表現には落とし込まず、サイトのプーリングとしてエネルギーを表現しています。

#### CGCNNの資料

CGCNNはGNNのプロトタイプで、資料が多く公開されています。公式のGitHubリポジトリ（転移学習のコードもあります）は https://github.com/txie-93/cgcnn 、非公式のチュートリアルとしては https://github.com/Diego-2504/CGCNN_tutorial があります。書籍としては『マテリアルズインフォマティクス：有機・無機化学のための深層学習』が参考になります。実装のフレームワークにはTensorFlow、PyTorch、JAX（Google）があり、最近はJAXが流行っているようです。Matbenchでの最高性能はcoGNが記録しています（https://arxiv.org/pdf/2302.14102.pdf ）。

#### 欠陥へのGNNの応用

Witmanらは、CGCNNを拡張して酸化物の酸素空孔生成エネルギーΔH<sub>VO</sub>を予測しました（M. D. Witman, A. Goyal, T. Ogitsu, A. H. McDaniel, S. Lany, Defect graph neural networks for materials discovery in high-temperature clean-energy applications, Nature Computational Science, 3, 675–686, 2023）。学習データは、200化合物（15種の陽イオン、63の空間群、51種の組成比）にわたる1,500種類の酸素空孔です。入力には母物質の結晶グラフに加え、バンドギャップ、有効質量、生成エンタルピーといった母物質全体の特徴量と、酸化数などのサイトごとの特徴量を使っています。コードは https://github.com/mwitman1/cgcnndefect/tree/Paper1 で公開されています。転移学習を使っていない理由は、ノードごとの欠陥生成エネルギーを学習するため、既存の学習済みモデルからはサイトごとの物性が得られないからだと思われます。

---

### GNoME

GNoMEのデータ（PBEによるDFT計算）は、いずれMaterials Projectに登録されるとのことですが、2023年12月25日現在まだ反映されていません。

#### コンセプト

GNoMEのコンセプトは、Materials ProjectのデータでNNPを学習し、そのNNPで安定構造を探索し、得られた構造をDFTで評価して再びNNPを学習する、というループを強化学習的に繰り返して探索とモデル訓練を続ける点にあります。ただし、この方法で構造のバリエーションが広がるのかという疑問は残ります。M3GNetが強化学習を取り入れているかは不明ですが、元素置換の網羅的探索はすでにMatterverseとして公開されており、今後M3GNetも大幅にアップデートされることが予想されます。

#### 詳細

元素置換は6元系まで考慮されており、既報の元素置換の確率に基づいて置換が行われます。組成から構造を生成する試みとしては、ランダムに100構造を生成し（この生成方法の詳細には疑問が残ります）、structure matcherで重複する構造を除いています。なお、学習済みポテンシャル（trained potential）は公開されていない点に注意が必要です。DFT-MDとの連携も興味深く、例えば短時間のDFT-MDで得られた構造による追加学習などが考えられます。ポテンシャル学習のノウハウも非常に豊富で、test-time augmentationによって緩和前の構造からも予測できるようにするなどの工夫が施されています。また、GNNの枠組みの中に、エネルギー（E<sub>formation</sub>）を予測するプロセスが組み込まれています。

#### 転移学習の有効性

GNoMEの論文（A. Merchant et al., Scaling deep learning for materials discovery, Nature, 624, 80–85, 2023）の補足情報では、Ba<sub>8</sub>Li<sub>16</sub>Se<sub>32</sub>Si<sub>8</sub>のMDデータを例に、学習済みモデルからのファインチューニング（転移学習）とランダムな初期値からの学習を比較しています。学習と同じ温度（400 K）のデータであれば、転移学習なしでも良好な予測が可能でした。一方、別の温度（1,000 K）のデータを予測するには転移学習が必要でした。ただし、400 Kと1,000 Kではイオン伝導のイベント数が圧倒的に違うので、400 Kで学習したモデルが1,000 Kに適用できないのは自明かもしれません。逆に、1,000 Kで学習したモデルは400 Kにも適用できるのではないかと考えています。

#### GNoMEとMatterverseの比較

GNoMEのデータはGitHub（https://github.com/google-deepmind/materials_discovery ）からダウンロードできます。フッ素を含む化合物のうち、金属や電気的中性を満たさない組み合わせを除くと、6,382件が収録されていました。元素置換で構造を作っているため、Fの空孔のような欠陥を導入する方向の構造は含まれていません。

元素置換の網羅的探索で作られたデータベースMatterverseと、いくつかの系で中身を比べてみると、次のような違いがありました。

- Ba–Li–Cu–F系：GNoMEで見つかったBaLiCuF<sub>6</sub>は、Matterverseには収録されていません。GNoMEでは置換を何回も繰り返すサイクル（強化学習的な探索）で見つかり、Matterverseでは単独の置換しか行っていないためかもしれません
- Ba–La–F系：GNoMEで見つかったBaLaF<sub>5</sub>は、Matterverseにも収録されていました。一方、Matterverseにのみ収録された化合物もあり、これらはGNoMEでは凸包上に存在しないのかもしれません

このように、データベースごとに探索の方法が異なるため、収録されている化合物にも違いがあります。

---

### 動向調査：Graph Neural Networkの適用

汎用GNNを実際の探索に用いるには、fine-tuningが必須です。M3GNetを用いたLi伝導体スクリーニングではNa<sub>x</sub>Li<sub>3-x</sub>YCl<sub>6</sub>が報告されていますが、これが新しい物質と言えるかは検討の余地があります。C. Chenら（Microsoft、arXiv 2024）の報告でも、構造空間の拡張が必須であること、disorder構造も取り入れるべきであること、生成AIをどう活用するかといった同様の課題が議論されています。

---

### EquiformerV2 + OMat

Open Materials 2024（OMat24）Inorganic Materials Dataset and Models（Luis Barroso-Luque, et al., 10.48550/arXiv.2410.12771 (2024)）は、MDやボルツマン分布に従うように原子を変位させた非平衡構造を含むデータセットです。位置づけとしてはMatlantisと同様ですが、モデルがMIT licenseで公開されているため使いやすいのが特徴です。OMatのpretrained modelからMPtrajでfine-tuningしたモデルはmatbenchのSoTAモデルとなっており、MPtraj+Alexandriaでfine-tuningしたモデルもあります。Energy MAEは10 meV/atom（OMat24テストスプリット）です。

---

### MACEのアーキテクチャ

MACEはSoTAの精度を達成しており、誤差はエネルギーで5 meV atom<sup>-1</sup>、力で0.1 eV Å<sup>-1</sup>程度です。

#### 一般的なLocal MLIP

一般的なLocal MLIPは、原子密度、結合長、角度をベースとした回帰モデル（線形からカーネル法、NNまで）です。計算効率が高い一方で、構成元素が増えて系が複雑になるほど、組み合わせ爆発によって計算効率が下がります。そのため、最近のLocal MLIPは原子クラスター展開を採用し、多体項を効率的に取り入れています。

#### Graph MLIP

Graph MLIPは、メッセージパッシングニューラルネットワークに基づく手法です。系の複雑さに対してロバストである一方で、多体間相互作用の表現は苦手とされています。そこで最近のGraph MLIPは多体間相互作用を取り入れる設計となっており、三体間相互作用を取り入れたM3GNetや、原子クラスター展開を取り入れたMACEがその例です。

#### 原子クラスター展開

原子クラスター展開では、原子iの全隣接原子との距離等を評価し、原子i近傍の原子密度分布関数として表現します。

#### 同変性（equivariance）と不変性（invariance）

並進操作Sと、ある関数f(x)を考えます。不変性はf(Sx) = f(x)が成り立つ性質で、例えば画像xに猫が写っているかを判定する関数は、猫の位置を動かしても出力が変わりません（Sはf(x)に作用できない）。同変性はf(Sx) = Sf(x)が成り立つ性質で、例えば各ピクセルが猫に含まれるかを返す関数では、入力を動かすと出力も同じだけ動きます（Sがf(x)に作用できる）。つまり、同変性は入力xと出力f(x)のどちらに対称操作を加えても等価な出力を返す性質です。畳み込みニューラルネットワークでは、畳み込みフィルターは同変、max poolingやaverage poolingは不変であり、設計によって同変か不変かが分かれます。

機械学習ポテンシャル（MLIP）との関係は次のように整理できます（T. W. Ko, S. P. Ong, Recent advances and outstanding challenges for machine learning interatomic potentials, Nature Computational Science, 3, 998–1000, 2023, https://doi.org/10.1038/s43588-023-00561-9 ）。

- 原子間ポテンシャルは対称性を考慮すべきとされますが、欠陥やMDのような状態でも対称性を考慮する必要があるのかは、まだよく分かりません
- Local MLIPでは、並進、回転、置換の対称操作に対する不変性を、スカラーの特徴量で表現しています
- Graph MLIPでは、メッセージ伝搬NNの構造として対称操作に対する同変性が担保されています
- NequIPでは、相対的な原子座標ベクトルを球面調和関数に射影したものをエッジ特徴量とし、これと隣接原子の特徴量から、自己ノードの幾何的なテンソル積を作ります
- 同変性の利点は相対位置ベクトルを使えることです。不変なMLIPで使う結合長や角度の情報よりも、相対位置ベクトルの方が表現力が高くなります
- ただし最近の研究では、バルク結晶に対しては同変性の利点が無いとも言われています

### MACE詳細

等変性（equivariance）については https://www.doc.ic.ac.uk/~bkainz/teaching/DL/notes/equivariance.pdf が参考になります。機械学習による原子間ポテンシャル（IP）としては順伝播NN、ガウス過程回帰、線形回帰があり、GNN系ではDTNN、SchNet、HIP-NN、PhysNet、DimeNetなどが二体間相互作用を扱います。MACEはこれらに対して多体間相互作用を取り入れた手法です（M3GNetとの違いがどこにあるかが論点です）。

#### アーキテクチャ：Message Passing Neural Network（Graph NNの一種）

MACEのメッセージパッシングは、次の式で表されます。原子iの状態σ<sub>i</sub><sup>(t)</sup>は位置r<sub>i</sub>、元素z<sub>i</sub>、特徴量h<sub>i</sub><sup>(t)</sup>からなり、近傍原子からのメッセージm<sub>i</sub><sup>(t)</sup>を用いて特徴量を更新し、各層の出力の和として原子エネルギーE<sub>i</sub>を求めます。

- σ<sub>i</sub><sup>(t)</sup> = (r<sub>i</sub>, z<sub>i</sub>, h<sub>i</sub><sup>(t)</sup>)
- r<sub>i</sub> ∈ ℝ<sup>3</sup>：r<sub>i</sub>は3次元実数ベクトル空間ℝ<sup>3</sup>に属する
- h<sub>i</sub><sup>(t+1)</sup> = U<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>, m<sub>i</sub><sup>(t)</sup>)
- m<sub>i</sub><sup>(t)</sup> = ⨁<sub>j∈N(i)</sub> M<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>, σ<sub>j</sub><sup>(t)</sup>)
- E<sub>i</sub> = Σ<sub>t=1</sub><sup>T</sup> R<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>)

### MACE学習

MACEの学習は200エポックで、40〜80台のNVIDIA A100 GPU（10〜20ノード）を用いて行われています。中規模モデルの学習には約2,600 GPU時間が必要です。TSUBAME（Tesla P100 × 4、4GPU × 30 node = 80 GPUs）を利用する場合、2,600 GPU時間 ÷ 80 GPU = 40時間に相当します。

### MACEパラメータ詳細

MACEの学習スクリプトで使う主なオプションと、その意味や設定のメモを以下にまとめます（「らしい」「？」が付いているものは未確認の情報です）。

- `--name="MACE_model"`：モデルの名前です
- `--train_file="train.xyz"`：訓練データのファイルで、必ず指定します
- `--valid_fraction=0.05`：訓練データのうち検証に使う割合です。検証データを個別に指定することもできるようですが、これで問題ないかは未確認です
- `--test_file="test.xyz"`：テストデータのファイルで、必ず指定します
- `--model="ScaleShiftMACE"` または `"MACE"`：ScaleShiftMACEの方が安定していて精度も高いのですが、孤立原子の計算には向かないため、結合が切れるような計算には適しません
- `--hidden_irreps='128x0e + 128x1o'`：隠れ層の表現です。0eだけだとinvariant（不変）なモデルになり、1oや2eを加えるとequivariant（等変）になります。128 channelの意味は、実はよく分かっていません。Mediumモデルは'128x0e + 128x1o'（？）で、Mediumで十分なようです。より高次の項を加味する場合は'128x0e + 128x1o + 128x2e'とします
- `--num_interactions`：メッセージパッシング層の数です。多すぎると良くありません
- `--correlation=3`：多体間相互作用の次数です。3なら4体間相互作用になります。2層で4体間とすると、結果的に13体間相互作用まで取り込まれるらしいです
- `--l_max=3`：角度の解像度です。解像度以下の角度の違いは同じ角度とみなされます（単位は不明）。値が高いほど精度は上がりますが、計算は遅くなります。デフォルトはl=3です
- `--r_max=6.0`：カットオフ半径です。mace-mp-0では6 Åで、層の数×r_maxの距離までの相互作用を学習することになります
- `--energy_key='energy'`：データファイル中のエネルギーのキーです。キーを指定すると読み込まれるらしいです
- `--forces_key='forces'`：力のキーです。同様に、指定すると読み込まれるらしいです
- `--stress_key='stress'`：応力のキーです。同様に、指定すると読み込まれるらしいです
- `--E0s="average"`：各原子の基準エネルギーを最小二乗法で求めます
- `--swa`：学習の途中から、損失関数におけるエネルギーの重みを大きくします
- `--start_swa`：swaを開始するエポック数です
- `--default_dtype='float32'` または `'float64'`：float32の方が2倍速いものの、精度はやや劣るとのことです。MDにはfloat32で十分です
- `--ema`：重みの指数移動平均（EMA）を使うオプションと思われます（詳細は未確認）
- `--ema_decay=0.99`：EMAの減衰率と思われます（詳細は未確認）
- `--num_interactions=2`：層の数です。通常は2です
- `--max_ell=2`：エッジ属性の球面調和関数の展開次数です
- `--max_num_epochs`：最大エポック数です。mace-mp-0では200で、max_num_epochs×num_configs_training/batch_size = 200k程度がおすすめとのことです
- `--batch_size`：バッチサイズです。100k × 200 / batch = 200k → batch = 100 のように決めます
- `--valid_batch_size`：検証時のバッチサイズです。batch_sizeと同じにしておけばよいと思われます
- `--patience`：指定するとearly stoppingが有効になるらしいです（要確認）
- `--eval_interval`：検証データで評価する間隔です。指定しなくてもよいかもしれません
- `--amsgrad`：Adamオプティマイザーの一種であるAMSGradを使用します
- `--restart_latest`：指定しておくと、checkpointsに保存されたベストのモデルから学習を再開します

### 注意事項

電子のself-consistent loopが収束しなかった計算は、教師データから外します。また、損失関数はMSEよりRMSEの方が良いとのことです。

### Descriptorについて

MACEのdescriptorについては https://mace-docs.readthedocs.io/en/latest/guide/descriptors.html にドキュメントがあります。論文では元素の特徴量ベクトルを抽出していますが、これを構造全体の特徴量ベクトルとして出力できないか、というのが検討課題です。

### データ処理

OUTCARから得られるデータは約20,000,000件にのぼります。そのため、入力データとしてランダムに1,000件を抽出し、MACE descriptorsを計算して図を作成します。

---

### 機械学習ポテンシャルのライブラリとベンチマーク

構造緩和やMDに使えて、自前で訓練でき、ASEとも連携できる機械学習ポテンシャルのライブラリには、次のようなものがあります。

- 同変（equivariant）GNN：NequIP（ベンチマークとしてよく使われる）、Equiformer（Transformerベース）、BOTNet（SoTAだがコードにアクセスできない）、MACE（当時Matbenchで最高性能、ドキュメントも充実：https://mace-docs.readthedocs.io/en/latest/ ）
- 不変（invariant）GNN：M3GNet（角度情報とglobal attention）、CGCNN（ベンチマーク）、coGN（SoTAだがコードが公開されていない）、ALIGNN（角度情報を取り込む）

CHGNetの論文によると、CHGNet（学習可能なパラメータ数400,438）をMPtrjデータセット（訓練・検証・テストを8 : 1 : 1に分割）で学習した場合、磁気モーメントを学習しないときのMAEは、14,572物質の157,955構造に対してエネルギー33 meV/atom、力79 meV/Å、応力0.351 GPaです。磁気モーメントの損失も含めると、それぞれ30 meV/atom、77 meV/Å、0.348 GPa、磁気モーメント0.032 μ<sub>B</sub>となります。汎用モデルのエネルギー誤差は、おおむね10〜30 meV/atom程度と考えておけばよいでしょう。

同変GNNの力場を比較したベンチマークとしては、EGraFFBench（V. Bihani, U. Pratyush et al., EGraFFBench: Evaluation of Equivariant Graph Neural Network Force Fields for Atomistic Simulations）があります。分子や固体のMDのベンチマークデータセット（Li–P–S系のLiPS20など）でエネルギーと力のMAEを比較しており、MDデータセットに対してはBOTNetが良い性能でした。メルト（融液）で学習して結晶を予測するテストでも、BOTNetが良い性能を示しています。
