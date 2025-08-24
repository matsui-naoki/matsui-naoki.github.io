## VASP

### 注意事項
- 計算理論の専門家ではない
- 実用的な使用法と非常にシンプルで限定的なDFTの側面のみをカバー

---

### VASP概要
- VASP：密度汎関数理論のための第一原理計算パッケージ
- 入力ファイル：
  - INCAR：パラメータ
  - POTCAR：ポテンシャル
  - KPOINTS：k点
  - POSCAR：初期構造

### 最適化プロセス

#### 電子密度の最適化（Electronic loop）
1. 初期電子密度を設定：E<sub>n</sub> = …（n=1）
2. 勾配法（？）で電子密度を変更：E<sub>n+1</sub> = …、ΔE = E<sub>n+1</sub> - E<sub>n</sub>
3. ΔE < EDIFFまでループ
→ 収束した電子密度とエネルギー

#### 構造最適化（Ionic loop）
1. 各原子の力を計算：F<sub>i</sub> = -∂E/∂R<sub>i</sub>
   - F<sub>i</sub>：i番目の原子の力
   - E：系のエネルギー
   - R<sub>i</sub>：i番目の原子の座標
2. 力ベクトルに沿って原子を変位
→ 緩和構造
各原子の力がEDIFFG以下になるまでループ

---

### エネルギーと相対エネルギー

#### 最適化されたターゲット系Xのエネルギー
- E<sub>X</sub> = -5 eV
- ✗ エネルギー自体の絶対値は意味がない
- ◯ 相対エネルギーを使用

#### 相対エネルギーの種類

1. **反応エネルギー**
   - 反応物と生成物間の相対エネルギー
   - A + B → AB、E = E(AB) - (E(A) + E(B))

2. **生成エネルギー**（Gibbs生成エネルギーのような）
   - 金属（および/またはガス）から化合物への反応エネルギー
   - 2Li + S → Li<sub>2</sub>S：E<sub>formation</sub> = E(Li<sub>2</sub>S) - (2×E(Li) + E(S))
   - 3Li + P + 4S → Li<sub>3</sub>PS<sub>4</sub>：E<sub>formation</sub> = E(Li<sub>3</sub>PS<sub>4</sub>) - (3×E(Li) + E(P) + 4×E(S))

3. **Energy above the convex hull**
   - 競合相とターゲット系の間の相対エネルギー
   - 2Li + S → Li<sub>2</sub>S：E<sub>hull</sub> = E(Li<sub>2</sub>S) - 2×E(Li) - E(S)
   - 3/2Li<sub>2</sub>S + 1/2P<sub>2</sub>S<sub>5</sub> → Li<sub>3</sub>PS<sub>4</sub>：E<sub>hull</sub> = E(Li<sub>3</sub>PS<sub>4</sub>) - (3/2×E(Li<sub>2</sub>S) + 1/2E(P<sub>2</sub>S<sub>5</sub>))

4. **Migration energy**
   - 安定点とサドルポイント間の相対エネルギー
   - E<sub>mig</sub> = E(saddle) - E(initial)

5. **欠陥形成エネルギー**
   - 内在欠陥：
     - Frenkel：M<sub>M</sub> + V<sub>i</sub> → V<sub>M</sub> + M<sub>i</sub>
     - Schottky：M<sub>M</sub> + X<sub>X</sub> → V<sub>M</sub> + V<sub>X</sub> + MX
   - 外因性欠陥：MO<sub>2</sub> → x/2O<sub>2</sub> + MO<sub>2-x</sub>
   - ドーピング：MO<sub>2</sub> + 0.1AO → M<sub>0.9</sub>A<sub>0.1</sub>O<sub>1.9</sub> + 0.1MO<sub>2</sub>

**相対エネルギーは反応によって厳密に定義される！！**
言い換えれば、上記のメトリクスを得るために事前に反応を定義する必要がある

### 生成エネルギーの曖昧さ
- ほとんどの場合、生成エネルギーは金属（および/またはガス）から化合物への反応エネルギーによって定義される
- このコンテキストはMaterials Projectで一般的
- しかし、生成エネルギーは任意の反応に対してしばしば与えられる
- いずれにせよ、反応を指定することで生成エネルギーを定義する必要がある

### Materials Projectにおける生成エネルギーとE<sub>hull</sub>
- 生成エネルギー ≠ E<sub>hull</sub>
- 生成エネルギーは金属（および/またはガス）から化合物への反応エネルギーによって定義される
- Li<sub>2</sub>S + S → 2LiS
- E<sub>hull</sub>(LiS) [eV atom<sup>-1</sup>] = (2E(LiS) - E(Li<sub>2</sub>S) - E(S))/4

### Energy above the hullの計算
1. 化学系内の安定エントリ（●）を特定（相図を作成）
2. ターゲット化合物の競合相を特定
3. 分解反応を定義してΔEを計算（DE = -E<sub>hull</sub>）

### E<sub>hull</sub>の実用的な計算

${codeBlock}python
from pymatgen.ext.matproj import MPRester
from pymatgen.core.composition import Composition
from pymatgen.analysis.phase_diagram import PhaseDiagram, PDPlotter, PDEntry

# Materials ProjectのAPIキーに置き換える
API_KEY = "enter your api key here"

# 組成とエネルギーに置き換える
composition = "Li16CaYb15F63"
energy = 0 # あなたの原子あたりのエネルギー

# Materials Project APIと組成を初期化
mpr = MPRester(API_KEY)
comp = Composition(composition)
elements = list(comp.elements)

# 構成元素を含むすべての化合物をクエリ
entries = mpr.get_entries_in_chemsys([str(el) for el in elements])

# エントリにあなたの構造を追加
your_entry = PDEntry(composition=comp,energy=energy)
entries.append(your_entry)

# 相図を作成
pd = PhaseDiagram(entries)

# 分解とhull上のエネルギーを取得
decomp = pd.get_decomposition(comp)
e_above_hull = pd.get_e_above_hull(your_entry)

i=0
for entry, amount in decomp.items():
    entry.structure.to(filename=poscar_path, fmt="POSCAR"+str(i))
    i+=1
${codeBlock}

---

### 熱力学的安定性の感覚

#### T = 0 K（DFT）での熱力学的安定性
- ΔG = ΔH（T = 0 Kで）

#### T = 298 Kでの熱力学的安定性
- ΔG = ΔH - TΔS
- 固体ではΔSは無視できる
- ΔG ≈ ΔH
- 一般に、計算結果についてエンタルピーをGibbsエネルギーとして扱う

#### Energy above the hull（E<sub>hull</sub>）
- E<sub>hull</sub> = 0：0 Kで熱力学的に安定
- E<sub>hull</sub> = 500 meV/atom：0 Kで熱力学的に不安定
- E<sub>hull</sub> ≤ 50-100 meV/atom：しばしば「準安定」と呼ばれる

#### 準安定とは何か？
- 準安定：熱力学的に不安定だが実験的にアクセス可能
- 例：高温からのクエンチング、メカノケミカルミリング、薄膜…

### LGPSの例
- 実験的センス（相図）から：LGPSは298から約550 Kで熱力学的に安定
- DFTセンス（E<sub>hull</sub> = 2meV/atom）から：LGPSは0Kで熱力学的に不安定で、Li<sub>4</sub>GeS<sub>4</sub>とLi<sub>3</sub>PS<sub>4</sub>に分解
- 数値誤差がこの判断に影響することに注意
- LGPSはDFTレベルで0Kで熱力学的に不安定
- LGPSは298Kで安定で実験的にアクセス可能
- LGPSは計算から準安定と呼ばれる

### なぜ生成エネルギーがしばしば議論されるのか？
- E<sub>hull</sub> ≈ 相安定性：P = exp(-E<sub>hull</sub>/kT)
- E<sub>f</sub> ≠ 相安定性
- 特に機械学習の目的では、E<sub>f</sub>が採用されている
- E<sub>f</sub>は単元素（金属/ガス）からの反応によって明確に定義されるため
- E<sub>hull</sub>はデータベース内の利用可能な競合相（曖昧！）に依存
- 未知の競合相を見逃す可能性がある

---

### エネルギーの正規化
- VASP出力は系（セル）の全エネルギー
- 例：
  - Li<sub>20</sub>S<sub>10</sub>：-240 eV
  - Li<sub>3</sub>：-9 eV
  - S<sub>6</sub>：-72 eV
- 2Li + S → Li<sub>2</sub>S
- ΔE = -24 - (2×3 + 1×12) = -6 eV
- 化学式単位（Li<sub>2</sub>S）あたりの生成エネルギー：-6 eV
- 原子あたりの生成エネルギー：-3 eV
- 原子あたりのエネルギーを使用する方が良い

---

### VASP出力ファイル
- 最適化構造：CONTCAR
- 電子およびイオンループのログ：OSZICAR
- 計算のログ：OUTCARおよびvasprun.xml
- 状態密度：DOSCAR
- 電子密度：CHGCAR
- MDの軌跡：XDATCAR
- …
- CONTCAR、OSZICAR、OUTCARを手動でチェックできる
- pymatgen.ioはvasprun.xmlを自動的に読み取ることができる

---

### POTCAR（擬ポテンシャル）
- 全電子の計算：高い計算コスト
- 価電子のみを変化させることを考慮し、コア電子は固定
- 擬ポテンシャルは固定コア電子と可変価電子を持つ

#### 擬ポテンシャルの種類
- Ce vs Ce_3
- Li vs Li_sv
- Pb vs Pb_d
- _sv、_pv、_d：内側のs、p、d軌道の電子を価電子として扱う
- _3：f電子を凍結コア電子として扱う（価電子ではない）

推奨ポテンシャル（VASP wiki）またはMaterials Projectsによるポテンシャル選択を参照：
- https://docs.materialsproject.org/methodology/materials-methodology/calculation-details/gga+u-calculations/pseudopotentials
- https://www.vasp.at/wiki/index.php/Choosing_pseudopotentials

私の場合、ほとんどの場合MP選択を使用。より多くの電子はより正確だが、計算コストが高い。

---

### POSCAR（構造ファイル）

#### シンプルな方法
VESTAでcifを開く → vasp形式でエクスポート → 名前を"POSCAR"に変更

#### Python方法
構造を読み込んでPOSCARとしてエクスポート

${codeBlock}python
from pymatgen.core import Structure
structure = Structure.from_file('your-cif-path.cif')
structure.to_file('POSCAR')
${codeBlock}


Conventionalセルの選択が常に推奨される。

注：DFTは部分占有を扱えない。そのような場合、スーパーセルを使用して{0, 1}秩序構造をモデル化する必要がある。

### POSCARの準備（私の場合）

#### わずかに無秩序な構造の場合
- pymatgen order-disorderパッケージ、ただし組み合わせ爆発のため高度に無秩序な構造には重い

#### 高度に無秩序な構造の場合
- 元のコード（ioncon）によるランダムサンプリング
- SQS（Special Quasi-random Structure、icet）
- クラスター展開（CULPAN）

#### 難易度低
- 置換：手動（VESTA）またはpymatgen
- スーパーセル：手動（VESTA）、元のコード（ioncon）

---

## KPOINTS

- セルサイズ：a、b、c
- 絶縁体（固体電解質）の場合：20/a、20/b、20/cのk点
- 金属（電極）の場合：40/a、40/b、40/c
- 基本的にMonkhorst-Pack（MP）法を使用、ただし六方晶格子はgamma-centered法
- POTCARを準備するためにpymatgen.io.vaspを強く推奨
- DFTMDの場合、gamma-centered単一k点が通常使用される

---

## 典型的な構造最適化のためのINCAR

${codeBlock}
NPAR = 4 # TSUBAME4用に最適化
GGA = PS # PBEsol汎関数
ENCUT = 520 # 平面波のカットオフエネルギー
EDIFF = 1e-4 # 電子ループの収束基準
EDIFFG = -0.01 # イオンループの収束基準
ISIF = 3 # 格子と内部座標を変化させる
IBRION = 2 # 最適化アルゴリズム、共役勾配法
ISMEAR = 0 # ガウススミアリング
SIGMA = 0.05 # スミアリング幅
LASPH = TRUE
ISPIN = 1 # スピン分極をオフにする
${codeBlock}

### 収束基準
- EDIFFG = -0.01 / eV Å<sup>-1</sup>
- EDIFF = 1e-4 / eV

---

## 異原子価元素置換の実践

1. プリミティブセルの構造最適化
   - ISIF = 3、ENCUT = 520

2. スーパーセル（a,b,c > 10 Å）を作成し、再度最適化
   - ISIF = 3、ENCUT = 520、ISMEAR=0

3. 2 Li → Mg + Vに置き換えて最適化
   - ISIF = 2、ENCUT = 400、ISYM = 0
   - Mgを含むPOTCARを準備
   - KPOINTSを準備

4. 相安定性解析、MD、…

---

## 背景電荷補償系の実践

### Kröger-Vink記法

M<sub>S</sub><sup>C</sup>：
- Mは元素、ホール（h）、電子（e）、または空孔（V）
- Sはホスト格子内のサイト
- Cは電荷（X：中性、●：正、'：負）

例：Li_svの場合（Liではなく）
- "Li_sv"：3電子（注："Li"ポテンシャルは1電子）
- Li<sup>+</sup>は"Li_sv"で2電子（注：Li<sup>+</sup>の"Li"では0電子）
- Li<sup>+</sup>としてLiを除去する場合、2電子のみを除去（3ではない！）
- F<sup>-</sup>としてFを除去する場合、8電子を除去（7ではない）

## 欠陥構造最適化のためのINCAR

${codeBlock}
NPAR = 4 # TSUBAME4用に最適化
GGA = PS # PBEsol汎関数、固体の格子定数の高い再現性
ENCUT = 400 # 格子を固定した平面波のカットオフエネルギー
EDIFF = 1e-4 # 電子ループの収束基準
EDIFFG = -0.01 # イオンループの収束基準
ISIF = 2 # 内部座標を変化させ格子を固定
IBRION = 2 # 最適化アルゴリズム、共役勾配法
ISMEAR = 0 # ガウススミアリング
SIGMA = 0.05 # スミアリング幅
LASPH = TRUE
ISPIN = 1 # スピン分極をオフにする
ISYM = 0 # 対称性制限を破棄
NELECT = $value # 電荷中性でない場合は電子数$valueを入力
${codeBlock}

---

## 構造最適化自動入力ファイル準備

${codeBlock} python
from pymatgen.io.vasp import MPRelaxSet

# MP基本パラメータへの追加設定
incar={'NPAR': 5, 'LCHARG': False, 'EDIFF': 1e-4, 'EDIFFG': -0.01, 'ISMEAR': 0,
       'GGA': 'PS', 'NELM': 60, 'NSW': 200}

relax_set = MPRelaxSet(structure=mat,
                       user_incar_settings=incar,
                       user_potcar_settings={'Ba': 'Ba_sv', 'F': 'F'}, # またはこのタグを削除
                       user_potcar_functional='PBE_64')
relax_set.write_input(output_dir="./")
${codeBlock}

---

## NEBのためのINCAR

${codeBlock}
NPAR = 4 # TSUBAME4用に最適化
GGA = PS # PBEsol汎関数、固体の格子定数の高い再現性
ENCUT = 400 # 格子を固定した平面波のカットオフエネルギー
EDIFF = 1e-4 # 電子ループの収束基準
EDIFFG = -0.05 # イオンループの収束基準
ISIF = 2 # 内部座標を変化させ格子を固定
IBRION = 1 # 最適化アルゴリズム
POTIM = 0.50 # 各イオンループでの原子の移動度
ISMEAR = 0 # ガウススミアリング
SIGMA = 0.05 # スミアリング幅
LASPH = TRUE
ISPIN = 1 # スピン分極をオフにする
ISYM = 0 # 対称性制限を破棄
NELECT = $value # 電荷中性でない場合は電子数$valueを入力
###NEB###
LCLIMB = True # climbing NEB、単純なNEBの場合はこれをオフにする
ICHAIN = 0
IMAGES = 5 # 中間イメージの数
SPRING = -5.0
${codeBlock}

## DOSのためのINCAR

${codeBlock}
SYSTEM = dos
NPAR = 4
PREC = Accurate
ENCUT = 520
EDIFF = 1e-5
ISMEAR = -5 ; SIGMA = 0.05
GGA_COMPAT=.FALSE.
LASPH = .TRUE.
LREAL = AUTO
ALGO = Fast
GGA = PS
ISTART = 1
ICHARG = 2
# DOS計算の場合はICHARGE=1でCHGCARからデータを読み込む
###DOS###
ISPIN = 1 # スピンを考慮（1:no 2:yes）
LORBIT = 11 #PDOSを計算
EMIN = -15 #DOS下端
EMAX = 15 #DOS上端
NEDOS = 1501 #DOSmesh
NELMIN = 2
NELM = 150
${codeBlock}

## MDのためのINCAR（NVTアンサンブル、Nose-Hoover熱浴）

${codeBlock}
ALGO = Old VeryFast
MDALGO = 2
EDIFF = 0.0001
ENCUT = 400
GGA = Ps
GGA_COMPAT = False
IBRION = 0
ISIF = 2
ISMEAR = 0
ISPIN = 1
ISYM = 0
LASPH = True
LCHARG = False
LREAL = Auto
LWAVE = False
NELM = 60
NELMIN = 4
NPAR = 5
NSW = 50000 # ステップ数（50000×2fs=100ps）
POTIM = 2 # タイムステップ 2 fs
PREC = Normal
SIGMA = 0.05
SMASS = 0
TEBEG = 1400 # 開始温度
TEEND = 1400 # 終了温度
${codeBlock}

---

## Materials Project計算条件調査

### 計算条件1

- MPのDBにはGGA、GGA+U、meta-GGA r2SCANの計算結果が混在
- r2SCANはGGAに電子のkinetic energyを取り入れたmeta-GGAの一種
- SCANはより正確に反応エネルギーを計算できる一方、数値安定性（計算コストとの兼ね合い？）に課題があった
- r2SCANは数値安定性も向上して、HTスクリーニングに適用され始めている
- とはいえ、計算はまだ重いので、MPではGGA-PBEsolで構造緩和して、次にr2SCANを計算している
- GGA、GGA+U、meta-GGAのエネルギーをconsistentに比較するためのエネルギー補正スキームが一応ある
- r2SCANはカットオフエネルギーは高め（680 eV）
- k-meshはようわからんが、基本MP法
- Pseudo-potentialsはSCAN用のものがないので、PBEのものを流用している
- → MPRelaxでGGA+Uを使用する。r2SCANはまだ手を出さないようにする

### エネルギー補正

- Anion GGA/GGA+U補正とGGA/GGA+U/r2SCAN補正がある
- 現状と過去はanion GGA/GGA+U補正が使われているようだが、今後は後者の補正に変わる
- GGAとGGA+U補正のエネルギー比較にも補正が必要
- GGA/GGA+U補正はAPIでは自動で行われるようだが、本当か？

### 絶対値誤差の原因（系統）

- 0K、0atom vs 1atom？RT → 30meV/atom以下の誤差が生まれるとのこと [S. Lany, Phys. Rev. B 78 2008 1-8]
- 重元素では相対論効果（大きな原子核の正電荷と電子の相互作用）
- ゼロ点エネルギーももちろん誤差に含まれる
- 個別の誤差は大きいが、反応エネルギー的な相対評価では絶対値誤差の中心値は0なので問題なし

### 計算条件2

- 基本的に、スピン分極あり、初期スピン配列はハイスピンの強磁性を採用している
- 以下Inorganic Solid Fluoridesから引用："Strong electronic localization excludes narrow-band or itinerant electron magnetism. As a consequence of lower covalency the magnetic interactions are weaker. At first approximation they often concern only the nearest-neighbor magnetic cations…. High-spin configurations are much more common for fluorides than for oxides due to smaller d-orbital splitting."
- → フッ化物はHigh-spin配列を採用して良さそう
- カットオフエネルギー：520 eV
- k-point mesh：1000/(number of atoms in the cell)
- k-point with MP method but Γ-centered for hexagonal cells
- tetrahedron method for k-point integration
- → このあたりはそのまま使う

### 計算条件3：ハバード（Hubbard）モデル

- 非局在化電子（混成強、バンド幅が広い）は、他の電子との相互作用（電子のポテンシャル場）は平均化された状態
- 局在電子の場合、電子間の相互作用が平均場で記述できない問題。同一原子内の電子の相互作用を指す
- → フッ化物イオンは共有結合性が低く（M-Fの軌道の重なりが小さい）、バンド幅は狭く、電子は局在化の傾向
- 局在電子相関のUを取り入れる必要がある。特に遷移金属化合物の酸化還元電位を計算する場合に重要
- U-valuesはOxidesの生成エネルギーの実験値を元に補正
- Co、Cr、Fe、Mn、Mo、Ni、V、Wで補正済み
- FとOは厳密には別の値が定義されるべきだが、MPではUは酸化物の値で統一している
- Uはpseudo-potential依存。結晶サイトにも依存するが、全サイト同じ値を適用

### 反応電位計算に関する文献

#### D. H. McTaggart et al., Assessing ternary materials for fluoride-ion batteries, Sci. data, 10:90 (2023)
- フッ化物の３元系の反応電位を調査したもの
- MPのGGA/GGA+Uの計算条件に準拠
- 結論の見えないよくわからない論文
- 70meV/atom以下を対象にしている。この値を使うことにする

#### A. Jain et al., Formation enthalpies by mixing GGA and GGA+U calculations, Phys. Rev. B, 84, 045115 (2011)
- 有名なCederグループの報告
- GGAとGGA+Uを比較するための補正提案
- GGA+Uは遷移金属フッ化物（酸化物）で必要だが、遷移金属のメタルではGGA+Uはもはや不要で、GGA計算が必要
- コンバージョン反応系では、金属と金属フッ化物間の反応であるが、それぞれ計算条件（U有り無し）が異なるので、GGAとGGA+Uの比較が困難であった
- この文献では補正式を用いて、LiFeF<sub>3</sub>のリチウムコンバージョン電極の電位がGGA単体より高精度に求まったと述べている
- この考え方はフッ化物電池の電極活物質の計算でも重要になる

### 計算条件4

- MPRelaxでGGA+Uを使用
- U-value：Co: 3.32、Cr: 3.7、Fe: 5.3、Mn: 3.9、Mo: 4.38、Ni: 6.2、V: 3.25、W: 6.2
- ΔE<sub>M</sub>：V: -1.7、Cr: -1.999、Mn: -1.668、Fe: -2.256、Co: -1.638、Ni: -2.541、W: -4.438、Mo: -3.202

### 計算条件5：MaterialsProject2020補正

#### アニオン補正
- 酸化物では結合長によりperoxide、superoxideに分類
- 他のアニオンでは酸化数分類は未適用
- アニオンか否かの判別は酸化数判別か、もっとも電気陰性度の高い元素であるかのいずれか
- → 部分的にフッ素を導入した組成でアニオン判別が切り替わるので、やはりこの補正はかけたくない
