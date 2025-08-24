## Graph Neural Network (GNN)

### CGCNN（Crystal Graph Neural Network）
- T. Xie, et al. (2017, 2018)
- グラフネットワークの結晶構造への適用
- 2017年以降のMI界隈のホットトピック
- m3gnet、matlantis、GNoME等もこの延長線に位置
- CGCNNがプロトタイプかつベンチマーク

### アーキテクチャ
- グラフ = ノード（原子）+ エッジ（結合）
- 原子：族、周期、半径、電荷などの特徴量ベクトル
- 結合：距離ベクトル
- 畳み込み層、プーリング層、完全連結層

### 応用
- バルク物性：total energy、生成エネルギー、分解エネルギー、バンドギャップ等の回帰、分類
- サイト特徴：force、stress tensor、欠陥生成エネルギー等の回帰
- 汎用ポテンシャルへ展開

---

### GNoME
- いずれGNoMEのデータ（DFT with PBE）がMaterials projectに登録されるとのこと
- 23.12.25現在、まだ反映されていない

#### コンセプト
- NNP学習(MP)→NNPで安定構造探索→DFT→NNP学習→…
- 強化学習的に探索とモデル訓練を続ける
- 疑問：バラエティが広がるか？
- 予想：m3gnetも強化学習を取り入れているかは不明だが、元素置換の網羅的探索はすでに公開済み（matterverse）
- 今後m3gnetも大幅なアップデートが想定

#### 詳細
- 元素置換として、６元まで考えたみたい
- 元素置換は既報の元素置換の確率に基づき実施
- 組成から構造を生成する試みは、ランダムに100構造を生成（これなに？）→ structure matcherで一致構造は排除
- trained potentialは公開されていない！
- DFT-MDとの連携について興味深い。例えば短時間DFT-MDで得られた構造で追加学習など
- ポテンシャル学習時のノウハウが凄まじい（test-time augmentationで緩和前構造も予測できるように、など）
- GNNの枠組みで、エネルギー（E<sub>formation</sub>）を予測するプロセスを入れている

---

### 動向調査：Graph Neural Networkの適用
- 汎用GNNはfine tuningが必須
- M3GNetを用いたLi伝導体スクリーニング→ Na<sub>x</sub>Li<sub>3-x</sub>YCl<sub>6</sub>を報告（新しいか？）
- C. Chen, arxiv (2024) Microsoft
- 構造空間の拡張が必須
- disorder構造も取り入れるべき
- 生成AIについては？
- 同様の課題を議論

---

### EquiformerV2 + OMat
- Open Materials 2024 (OMat24) Inorganic Materials Dataset and Models
- Luis Barroso-Luque, et al., 10.48550/arXiv.2410.12771 (2024)
- 非平衡状態（MDやボルツマン分布likeに構造を変位）を含むデータセット
- Matlantisと同じ感じ。モデルはMIT licenseで公開されているので使いやすい
- OMatのpretrained modelから、MPtrajでfine-tuning：matbenchのSoTAモデル
- OMatのpretrained modelから、MPtraj+Alexandriaでfine-tuningモデルもある
- Energy MAE：10 meV/atom（OMat24テストスプリット）

---

### MACEのアーキテクチャ
- SoTAの精度：
  - Energy：5 meV atom<sup>-1</sup>
  - Force：0.1 eV Å<sup>-1</sup>

#### 一般的なLocal MLIP
- 原子密度、結合長、角度ベースの回帰モデル（線形~kernel~NN）
- 計算効率が高いが、系が複雑（構成元素↑）になるほど計算効率が下がる（組み合わせ爆発）
- 最近のLMLIPは原子クラスター展開を採用し、効率的に多体間項を取り入れている

#### Graph MLIP
- メッセージ伝達ニューラルネットワーク
- 系の複雑さに対してロバストだが、多体間相互作用の表現が苦手（？）
- 最近のGMLIPは、多体間相互作用を取り入れる設計
  - 三体間相互作用を取り入れたM3GNet
  - 原子クラスター展開を取り入れたMACE

#### 原子クラスター展開
- 原子iの全隣接原子の距離等の評価→原子i近傍の原子密度分布関数として表現

### MACE詳細
- https://www.doc.ic.ac.uk/~bkainz/teaching/DL/notes/equivariance.pdf
- IP：順伝搬NN、ガウス過程回帰、線形回帰
- GNN：二体間相互作用 for DTNN、SchNet、HIP-NN、PhysNet、or DimeNet
- MACE：多体間相互作用を取り入れた（M3GNetとの違いとは）

#### アーキテクチャ：Message Passing Neural Network（Graph NNの一種）
- σ<sub>i</sub><sup>(t)</sup> = (r<sub>i</sub>, z<sub>i</sub>, h<sub>i</sub><sup>(t)</sup>)
- r<sub>i</sub> ∈ ℝ<sup>3</sup>：r<sub>i</sub>は3次元実数ベクトル空間ℝ<sup>3</sup>に属する
- h<sub>i</sub><sup>(t+1)</sup> = U<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>, m<sub>i</sub><sup>(t)</sup>)
- m<sub>i</sub><sup>(t)</sup> = ⨁<sub>j∈N(i)</sub> M<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>, σ<sub>j</sub><sup>(t)</sup>)
- E<sub>i</sub> = Σ<sub>t=1</sub><sup>T</sup> R<sub>t</sub>(σ<sub>i</sub><sup>(t)</sup>)

### MACE学習
- 200エポック、40-80 NVIDIA A100 GPU、10-20ノード
- 中規模モデルの学習：約2,600 GPU時間
- TSUBAME：Tesla P100 × 4、4GPU × 30 node = 80 GPUs
- 2600GPU hours/80GPU = 40hours

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
- Self-consistent loopが収束しない計算は教師データから外す
- loss functionはMSEよりRMSEが良いとのこと

### Descriptorについて
- https://mace-docs.readthedocs.io/en/latest/guide/descriptors.html
- 論文では元素の特徴量ベクトルを抽出しているが、構造の特徴量ベクトルとして出力できないか？

### データ処理
- OUTCAR → data ≈ 20,000,000
- Input data：random 1,000 → MACE descriptors → 図を作る