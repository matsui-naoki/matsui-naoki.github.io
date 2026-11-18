## Graph Neural Network (GNN)

### CGCNN（Crystal Graph Convolutional Neural Network）

CGCNNは、T. Xieらが2017年から2018年にかけて発表した、グラフニューラルネットワークを結晶構造へ適用した手法です。2017年以降のマテリアルズ・インフォマティクス分野のホットトピックとなっており、M3GNet、Matlantis、GNoME等もこの延長線上に位置づけられます。その意味で、CGCNNはプロトタイプであると同時にベンチマークとしての役割も担っています。

### アーキテクチャ

グラフはノード（原子）とエッジ（結合）から構成されます。原子は族、周期、半径、電荷などの特徴量ベクトルとして、結合は距離ベクトルとして表現されます。ネットワーク本体は畳み込み層、プーリング層、全結合層から構成されます。

### 応用

応用先としては、全エネルギー、生成エネルギー、分解エネルギー、バンドギャップ等のバルク物性の回帰・分類に加えて、力（force）、応力テンソル、欠陥生成エネルギー等のサイトごとの特性の回帰が挙げられます。さらに、これらの技術は汎用ポテンシャルへと展開されています。

---

### GNoME

GNoMEのデータ（PBEによるDFT計算）は、いずれMaterials Projectに登録されるとのことですが、2023年12月25日現在まだ反映されていません。

#### コンセプト

GNoMEのコンセプトは、Materials ProjectのデータでNNPを学習し、そのNNPで安定構造を探索し、得られた構造をDFTで評価して再びNNPを学習する、というループを強化学習的に繰り返して探索とモデル訓練を続ける点にあります。ただし、この方法で構造のバリエーションが広がるのかという疑問は残ります。M3GNetが強化学習を取り入れているかは不明ですが、元素置換の網羅的探索はすでにMatterverseとして公開されており、今後M3GNetも大幅にアップデートされることが予想されます。

#### 詳細

元素置換は6元系まで考慮されており、既報の元素置換の確率に基づいて置換が行われます。組成から構造を生成する試みとしては、ランダムに100構造を生成し（この生成方法の詳細には疑問が残ります）、structure matcherで重複する構造を除いています。なお、学習済みポテンシャル（trained potential）は公開されていない点に注意が必要です。DFT-MDとの連携も興味深く、例えば短時間のDFT-MDで得られた構造による追加学習などが考えられます。ポテンシャル学習のノウハウも非常に豊富で、test-time augmentationによって緩和前の構造からも予測できるようにするなどの工夫が施されています。また、GNNの枠組みの中に、エネルギー（E<sub>formation</sub>）を予測するプロセスが組み込まれています。

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
