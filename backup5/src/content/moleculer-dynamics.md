
# 固体電解質のための分子動力学計算

## DFT/GNNと汎用ポテンシャルの選択

### 方法の比較（スコア1-5：低-高）あくまで私見・・・

| 方法 | ポテンシャル | 訓練データ | 精度 | 計算コスト | 統計精度 | ポテンシャル互換性の認識 | 難易度 | コメント |
|------|------------|-----------|------|-----------|---------|---------------------|--------|----------|
| DFTMD | - | DFT with on-the-fly learning | 5 | 1 | 1-3 | | | 信頼性は高いが、統計が少ないと導電率計算に実質的な誤差が生じる |
| DFTMD+MLFF | Gauss-kernel | MP trajectory | 3 | 2 | 3-4 | | | DFTより速いが、それほど速くない。EFS予測も良くない |
| GNNMD | m3GNet、SevenNet | OMat with MD | 2 | 3 | 3-1 | | | レガシー。これらの事前訓練モデルは使用しない。MDに対応していない |
| | MACE、eqV2 | Omat | 3.5 | 3 | 4 | 5 | 1 | 最先端の事前訓練モデル。MDに対応！ |
| | Matlantis | Traj., NPT-MD, ... | 4.5| 4 | 4 | 3 | 1 | 使いやすく優れた精度。問題は隠された訓練データ。そのため、能力は常にブラックボックス |
| NNMD Self-trained model | - | NPT-MD, ... | 4.5 | 5 | 5 | 4 | 5 | かなり難しいが最も優れた精度。経験なし |

### 推奨

- 短いステップで正確なシミュレーション：TSUBAMEでDFTMD
- 中程度のステップで正確なシミュレーション：TSUBAMEでDFTMD+MLFF
- 中規模スクリーニング：MATLANTISでMatlantis
- 大規模ラフスクリーニング：TSUBAMEでeqV2OMat
- 大規模精密スクリーニング：TSUBAMEで任意のアーキテクチャを使用して独自のポテンシャルを訓練

---

## アンサンブルと熱浴の選択

### NPTアンサンブル：粒子数(N)、圧力(P)、温度(T)一定

熱浴：
- VASP：Langevin
- ASE：Nose-Hoover（推奨）

仕様：シミュレーション中に体積と格子形状が可変

使用法：
- 相転移のシミュレーション
- 平衡体積の決定 → NVT計算を引き継ぐことができる
- GNNモデルの訓練データ作成（訓練データには100-200 K高い温度を設定）
- アモルファス構造の作成

### NVTアンサンブル：粒子数(N)、体積(V)、温度(T)一定

熱浴：
- VASP：Langevin、Nose-Hoover（推奨）
- ASE：Langevin、Nose-Hoover（推奨）

仕様：シミュレーション中に体積と格子形状が固定

使用法：
- 0Kで事前最適化された構造またはNPT計算から時間平均された構造からのイオン伝導率のシミュレーション

### 注意事項

- NPTはより柔軟だが、応力の正確な推定が必要
- 一般に、応力のDFT計算には多くの計算コストが必要（ENCUT = ENMAX × 1.3、Pulay応力を参照）
- 事前訓練ポテンシャルを使用する場合、訓練データが高いENCUTで計算されたことに注意
- NVTはイオン伝導率を計算する一般的なアプローチ。固定格子は融点以上でも構造変形や融解を抑制できる
- DFTMDの場合、ENCUT=EMAXを設定することで計算コストを削減できる（通常400 eV）

---

## パラメータのヒント

### タイムステップ
- 軽元素H：0.5 fs（振動周波数がHで高い）
- Li：1-2 fs
- その他の重い元素：2fs以上

### データ間隔
- 特定の目的を除いて、10-50間隔が推奨される
- 毎(1)間隔は大きすぎる軌跡ファイルを引き起こし、ラップトップで処理できない可能性がある！

### 総時間
- DFTMD：50-100 ps
- GNNMD：~1000 ps（1 ns）

### 温度
- Arrheniusプロットには少なくとも4点が必要
- 典型的な範囲は高伝導率材料で300～800 K、低伝導率材料で600～1200 K

### DFT特有
- K点：計算コストを削減するために単一ガンマ点が推奨される
- 擬ポテンシャル：電子数の少ないポテンシャルを選択
- 原子数（≈スーパーセルサイズ）：
  - DFTMD：50-200
  - GNNMD：150-500

### VASPのヒント
- POSCARの最後に書かれたゼロ速度を削除（CONTCARからPOSCARを作成した場合）
- ノード：INCARのNPAR（job.shの"mpirun -n xxx"のxxxを変更）
  - cpu40：NPAR=5
  - cpu160：NPAR=8
- 長い計算の場合、ノード予約（例：4日間）についてMatsuiに尋ねる

### MATLANTIS上のPFPのヒント
- 再現性のために、使用したPFPバージョンに注意する
- ドキュメントと開発者貢献リポジトリを読む
  - ドキュメント：https://docs.matlantis.com/atomistic-simulation-tutorial/en/
  - リポジトリ：https://github.com/matlantis-pfcc/matlantis-contrib/tree/main/matlantis_contrib_examples
- 約2-3ノードのみ利用可能

### その他のGNNMDのヒント
- TSUBAMEには強力なGPUノードがある。TSUBAME内のGPUでGNNMDを実行することを強く推奨

---

## 出力ファイル

### VASP
- vasprun.xml：すべての情報がこれに含まれている。aseまたはpmgを介してこのxmlから軌跡を読み取ることができる。ウォールタイムでジョブが中止された場合、このxmlファイルは壊れて開けない
- XDATCAR：軌跡（Ovitoで読み取り可能）。aseを介してこのファイルを読み取ることができる
- CONTCAR：速度を含む最後の構造
- …

再開方法：
1. 上書きを避けるためにXDATCARの名前を変更
2. CONTCARをPOSCARにコピー
3. ジョブを提出

### ASE
- xxx.traj：軌跡。aseを介してこのファイルを読み取ることができる

再開方法：
1. ase.md.XXXXオブジェクトで"append_trajectory=True"を設定
2. ジョブをsubmit

---

## 解析

### トレーサー拡散係数
D<sub>tr</sub> = lim<sub>t→∞</sub> Δx<sup>2</sup>/(6t)

- Δx<sup>2</sup>：平均二乗変位
- MSD(Δt)-Δtプロットの傾き = D<sub>tr</sub>

### Nernst-Einstein式
σ = (Z<sub>c</sub><sup>2</sup>e<sup>2</sup>C)/(k<sub>B</sub>T) × D<sub>tr</sub>

C = N<sub>c</sub>/V

Nernst-Einsteinの使用は物議を醸しており、最近議論されている：
A. Marcolongo, N. Marzari, Ionic correlations and failure of Nernst-Einstein relation in solid-state electrolytes, Phys. Rev. Mat., 1, 025402 (2017)

### Arrhenius則
σ = (σ<sub>0</sub>/T) × exp(-E<sub>a</sub>/(kT))

log σT = log σ<sub>0</sub> - 2.303 × E<sub>a</sub>/(kT)

log σT vs 1000/Tの傾き = -2.303 × E<sub>a</sub>/(1000k)

### 上記の特性を計算する方法

1. pymatgen diffusion-analyzerを使用
   - 使いやすい。このモジュールの時間平均化がMSD(Δt)-Δtプロットに人工的な偏差を引き起こすことに注意

2. numpy等で計算（https://github.com/matlantis-pfcc/matlantis-contrib/blob/main/matlantis_contrib_examples/MD_Li_diffusion_in_LGPS）

### 時間平均MSD vs 通常のMSD
- 時間平均MSD(Δt)（式7）は平滑化されたMSDプロファイルを提供するが、Dの誤差を減らさない
- さらに、平滑化はMSD(t)-tプロットの末尾（終端）領域の人工的な偏差を引き起こす
- 通常のMSD(Δt)（式6）は明確さのためにより良い（私の意見では）

### MSD(Δt)-ΔtとArrheniusプロットのフィッティングのヒント
- ✗低温での線形性が悪い：ホッピングイベントが少なく、誤差が大きい
- ◎高温での線形性が良い：ホッピングイベントが多く、統計が良い
- (1) 正確なデータでフィッティング
- (2) 精度の低い低温データを含む全体フィッティング
- 精度が低い→室温で高い伝導率を予測する傾向があるが、これは間違い！！！！！
- 私の意見では、5 Å未満のMSDは破棄すべき
- 10 Åを超えるMSDの使用がより良い

---

### Electrostatic ground-state (ESGS)構造とSpecial quasi-random structure構造の比較研究
- Liサイトは1a、24kの2通り
- SQSの方がESGS構造より実験により近いイオン伝導率を示した