## Graph Neural Network (GNN)

### CGCNN（Crystal Graph Neural Network）

CGCNNは、T. Xieらが2017年から2018年にかけて発表した、グラフネットワークを結晶構造へ適用した手法です。2017年以降のマテリアルズ・インフォマティクス界隈のホットトピックとなっており、m3gnet、matlantis、GNoME等もこの延長線上に位置づけられます。その意味で、CGCNNはプロトタイプであると同時にベンチマークとしての役割も担っています。

### アーキテクチャ

グラフはノード（原子）とエッジ（結合）から構成されます。原子は族、周期、半径、電荷などの特徴量ベクトルとして、結合は距離ベクトルとして表現されます。ネットワーク本体は畳み込み層、プーリング層、完全連結層から構成されます。

### 応用

応用先としては、total energy、生成エネルギー、分解エネルギー、バンドギャップ等のバルク物性の回帰・分類に加えて、force、stress tensor、欠陥生成エネルギー等のサイト特徴の回帰が挙げられます。さらに、これらの技術は汎用ポテンシャルへと展開されています。

---

### GNoME

GNoMEのデータ（DFT with PBE）は、いずれMaterials Projectに登録されるとのことですが、2023年12月25日現在まだ反映されていません。

#### コンセプト

GNoMEのコンセプトは、Materials ProjectのデータでNNPを学習し、そのNNPで安定構造を探索し、得られた構造をDFTで評価して再びNNPを学習する、というループを強化学習的に繰り返して探索とモデル訓練を続ける点にあります。ただし、この方法で構造のバラエティが広がるのかという疑問は残ります。m3gnetが強化学習を取り入れているかは不明ですが、元素置換の網羅的探索はすでにmatterverseとして公開されており、今後m3gnetも大幅なアップデートが想定されます。

#### 詳細

元素置換としては6元系まで考慮されており、置換は既報の元素置換の確率に基づいて実施されます。組成から構造を生成する試みとしては、ランダムに100構造を生成し（この生成方法の詳細には疑問が残ります）、structure matcherで一致した構造を排除しています。なお、学習済みポテンシャル（trained potential）は公開されていない点に注意が必要です。DFT-MDとの連携も興味深く、例えば短時間のDFT-MDで得られた構造による追加学習などが考えられます。ポテンシャル学習時のノウハウも凄まじく、test-time augmentationにより緩和前構造も予測できるようにするなどの工夫が施されています。また、GNNの枠組みの中に、エネルギー（E<sub>formation</sub>）を予測するプロセスが組み込まれています。

---

### 動向調査：Graph Neural Networkの適用

汎用GNNを実際の探索に用いるにはfine tuningが必須です。M3GNetを用いたLi伝導体スクリーニングではNa<sub>x</sub>Li<sub>3-x</sub>YCl<sub>6</sub>が報告されていますが、これが新しい物質と言えるかは検討の余地があります。C. Chenら（Microsoft、arxiv 2024）の報告では、構造空間の拡張が必須であること、disorder構造も取り入れるべきであること、さらに生成AIをどう活用するかといった、同様の課題が議論されています。

---

### EquiformerV2 + OMat

Open Materials 2024（OMat24）Inorganic Materials Dataset and Models（Luis Barroso-Luque, et al., 10.48550/arXiv.2410.12771 (2024)）は、MDやボルツマン分布likeに構造を変位させた非平衡状態を含むデータセットです。位置づけとしてはMatlantisと同じイメージですが、モデルがMIT licenseで公開されているため使いやすいのが特徴です。OMatのpretrained modelからMPtrajでfine-tuningしたモデルはmatbenchのSoTAモデルとなっており、MPtraj+Alexandriaでfine-tuningしたモデルもあります。Energy MAEは10 meV/atom（OMat24テストスプリット）です。

---

### MACEのアーキテクチャ

MACEはSoTAの精度を達成しており、Energyで5 meV atom<sup>-1</sup>、Forceで0.1 eV Å<sup>-1</sup>程度です。

#### 一般的なLocal MLIP

一般的なLocal MLIPは、原子密度、結合長、角度をベースとした回帰モデル（線形からカーネル法、NNまで）です。計算効率が高い一方で、構成元素が増えて系が複雑になるほど組み合わせ爆発により計算効率が下がります。そのため、最近のLocal MLIPは原子クラスター展開を採用し、効率的に多体間項を取り入れています。

#### Graph MLIP

Graph MLIPは、メッセージ伝達ニューラルネットワークに基づく手法です。系の複雑さに対してロバストである一方で、多体間相互作用の表現は苦手とされています。そこで最近のGraph MLIPは多体間相互作用を取り入れる設計となっており、三体間相互作用を取り入れたM3GNetや、原子クラスター展開を取り入れたMACEがその例です。

#### 原子クラスター展開

原子クラスター展開では、原子iの全隣接原子との距離等を評価し、原子i近傍の原子密度分布関数として表現します。

### MACE詳細

等変性（equivariance）については https://www.doc.ic.ac.uk/~bkainz/teaching/DL/notes/equivariance.pdf が参考になります。原子間ポテンシャル（IP）としては順伝搬NN、ガウス過程回帰、線形回帰があり、GNN系ではDTNN、SchNet、HIP-NN、PhysNet、DimeNetなどが二体間相互作用を扱います。MACEはこれらに対して多体間相互作用を取り入れた手法です（M3GNetとの違いがどこにあるかが論点です）。

#### アーキテクチャ：Message Passing Neural Network（Graph NNの一種）

- σ<sub>i</sub><sup>(t)</sup> = (r<sub>i</sub>, z<sub>i</sub>, h<sub>i</sub><sup>(t)</sup>)
- r<sub>i</sub> ∈ ℝ<sup>3</sup>：r<sub>i</sub>は3次元実数ベクトル空間ℝ<sup>3</sup>に属する
- h<sub>i</sub><sup>(t+1)</sup> = U<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>, m<sub>i</sub><sup>(t)</sup>)
- m<sub>i</sub><sup>(t)</sup> = ⨁<sub>j∈N(i)</sub> M<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>, σ<sub>j</sub><sup>(t)</sup>)
- E<sub>i</sub> = Σ<sub>t=1</sub><sup>T</sup> R<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>)

### MACE学習

MACEの学習は200エポックで、40-80台のNVIDIA A100 GPU（10-20ノード）を用いて行われています。中規模モデルの学習には約2,600 GPU時間が必要です。TSUBAME（Tesla P100 × 4、4GPU × 30 node = 80 GPUs）を利用する場合、2,600 GPU時間 ÷ 80 GPU = 40時間に相当します。

### MACEパラメータ詳細

- --name="MACE_model"：名前
- --train_file="train.xyz"：必ず指定
- --valid_fraction=0.05：個別に指定もできるようだが、これでOKか
- --test_file="test.xyz"：必ず指定
- --model="ScaleShiftMACE" or "MACE"：ScaleShiftMACEが安定して精度も高いが、孤立原子の計算には向かないため結合が切れる計算には不適
- --hidden_irreps='128x0e + 128x1o'：隠れ相、0eだけだとinvariant、1o 2eがequivariant。128 channelの意味が実はわかっていない。Medium：'128x0e + 128x1o'？Mediumで十分っぽい。より高次の項を加味するなら'128x0e + 128x1o + 128x2e'
- --num_interactions：メッセージ伝達layerの数、多すぎるとあかん
- --correlation=3：多体間相互作用の次数。3なら4体間。2layerで4体間だと、結果的に13体間となるらしい
- --l_max=3：角度の解像度。解像度以下は同じ角度とみなす（単位がわからん）高い値ほど精度はあがるが遅くなる。default l=3
- --r_max=6.0：cutoff radius mace-mp-0は6 Å、layer数×rmaxの距離を学習することになる
- --energy_key='energy'：keyを入れると読み込むらしい
- --forces_key='forces'：keyを入れると読み込むらしい
- --stress_key='stress'：keyを入れると読み込むらしい
- --E0s="average"：原子の基準エネルギーを最小二乗法で求める
- --swa：損失関数のenergyの割合を途中から増やす
- --start_swa：swaを起動するepoch数
- --default_dtype='float32' or 'float64'：float32が2倍早いが精度がやや劣るとのこと。MDはfloat32でOK
- --ema：???
- --ema_decay=0.99：????
- --num_interactions=2：number of layers、typically 2
- --max_ell=2：expansion order of spherical harmonic edge attributes
- --max_num_epochs：mace-mp-0では200、max_num_epochs×num_configs_training/batch_site = 200kがおすすめとのこと
- --batch_size：100k × 200 / batch = 200k → batch = 100
- --valid_batch_size：↑と同じにしておく？
- --patience：入れるとearly stopingしてくれるらしい（本当か？）
- --eval_interval：evalで評価するインターバル、いらないかも
- --amsgrad：adamsのoptimizerの一種
- --restart_latest：これを入れておくとcheckpointsのベストなモデルで再開してくれる

### 注意事項

Self-consistent loopが収束しない計算は教師データから外します。また、loss functionはMSEよりRMSEが良いとのことです。

### Descriptorについて

MACEのdescriptorについては https://mace-docs.readthedocs.io/en/latest/guide/descriptors.html にドキュメントがあります。論文では元素の特徴量ベクトルを抽出していますが、これを構造の特徴量ベクトルとして出力できないか、というのが検討課題です。

### データ処理

OUTCARから得られるデータは約20,000,000件にのぼります。入力データとしてはランダムに1,000件を抽出し、MACE descriptorsを計算して図を作成します。
