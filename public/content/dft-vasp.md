## VASP

### 注意事項
はじめにお断りしておくと、筆者は計算理論の専門家ではありません。そのため、このページでは実用的な使用法と、非常にシンプルで限定的なDFTの側面のみを扱います。

---

### VASP概要
VASPは、密度汎関数理論（DFT）に基づく第一原理計算パッケージです。計算を実行するには、次の4つの入力ファイルを用意します。

- INCAR：パラメータ
- POTCAR：ポテンシャル
- KPOINTS：k点
- POSCAR：初期構造

### 最適化プロセス

#### 電子密度の最適化（Electronic loop）
1. 初期電子密度を設定します：E<sub>n</sub> = …（n=1）
2. 勾配法（？）で電子密度を変更します：E<sub>n+1</sub> = …、ΔE = E<sub>n+1</sub> - E<sub>n</sub>
3. ΔE < EDIFFとなるまでループします

このループが収束すると、収束した電子密度とエネルギーが得られます。

#### 構造最適化（Ionic loop）
1. 各原子に働く力を計算します：F<sub>i</sub> = -∂E/∂R<sub>i</sub>（ここで、F<sub>i</sub>はi番目の原子の力、Eは系のエネルギー、R<sub>i</sub>はi番目の原子の座標です）
2. 力ベクトルに沿って原子を変位させます

各原子の力がEDIFFG以下になるまでこのループを繰り返すことで、緩和構造が得られます。

---

### エネルギーと相対エネルギー

最適化されたターゲット系Xのエネルギーとして、例えばE<sub>X</sub> = -5 eVといった値が得られます。しかし、このエネルギーの絶対値そのものには意味がありません。意味を持つのは相対エネルギーであり、必ず相対エネルギーを使用します。

#### 相対エネルギーの種類

代表的な相対エネルギーには、次の5種類があります。

1. **反応エネルギー**：反応物と生成物間の相対エネルギーです。A + B → ABという反応では、E = E(AB) - (E(A) + E(B))で定義されます。

2. **生成エネルギー**（Gibbs生成エネルギーのような）：金属（および/またはガス）から化合物への反応エネルギーです。例えば2Li + S → Li<sub>2</sub>Sという反応ではE<sub>formation</sub> = E(Li<sub>2</sub>S) - (2×E(Li) + E(S))、3Li + P + 4S → Li<sub>3</sub>PS<sub>4</sub>という反応ではE<sub>formation</sub> = E(Li<sub>3</sub>PS<sub>4</sub>) - (3×E(Li) + E(P) + 4×E(S))となります。

3. **Energy above the convex hull**：競合相とターゲット系の間の相対エネルギーです。2Li + S → Li<sub>2</sub>Sに対してはE<sub>hull</sub> = E(Li<sub>2</sub>S) - 2×E(Li) - E(S)、3/2Li<sub>2</sub>S + 1/2P<sub>2</sub>S<sub>5</sub> → Li<sub>3</sub>PS<sub>4</sub>に対してはE<sub>hull</sub> = E(Li<sub>3</sub>PS<sub>4</sub>) - (3/2×E(Li<sub>2</sub>S) + 1/2E(P<sub>2</sub>S<sub>5</sub>))となります。

4. **Migration energy**：安定点とサドルポイント間の相対エネルギーで、E<sub>mig</sub> = E(saddle) - E(initial)と定義されます。

5. **欠陥形成エネルギー**：内在欠陥にはFrenkel型（M<sub>M</sub> + V<sub>i</sub> → V<sub>M</sub> + M<sub>i</sub>）とSchottky型（M<sub>M</sub> + X<sub>X</sub> → V<sub>M</sub> + V<sub>X</sub> + MX）があります。外因性欠陥はMO<sub>2</sub> → x/2O<sub>2</sub> + MO<sub>2-x</sub>のように、ドーピングはMO<sub>2</sub> + 0.1AO → M<sub>0.9</sub>A<sub>0.1</sub>O<sub>1.9</sub> + 0.1MO<sub>2</sub>のように表されます。

**相対エネルギーは反応によって厳密に定義されます！** 言い換えれば、上記のメトリクスを得るためには、事前に反応を定義しておく必要があります。

### 生成エネルギーの曖昧さ

ほとんどの場合、生成エネルギーは金属（および/またはガス）から化合物への反応エネルギーとして定義され、この文脈はMaterials Projectでも一般的です。しかし実際には、生成エネルギーが任意の反応に対して与えられていることもしばしばあります。いずれにせよ、反応を指定することによって生成エネルギーを定義する必要があります。

### Materials Projectにおける生成エネルギーとE<sub>hull</sub>

生成エネルギーとE<sub>hull</sub>は同じものではありません。生成エネルギーは金属（および/またはガス）から化合物への反応エネルギーによって定義されます。一方、例えばLi<sub>2</sub>S + S → 2LiSという反応を考えると、E<sub>hull</sub>(LiS) [eV atom<sup>-1</sup>] = (2E(LiS) - E(Li<sub>2</sub>S) - E(S))/4のように計算されます。

### Energy above the hullの計算
1. 化学系内の安定エントリ（●）を特定します（相図を作成）
2. ターゲット化合物の競合相を特定します
3. 分解反応を定義してΔEを計算します（DE = -E<sub>hull</sub>）

### E<sub>hull</sub>の実用的な計算

```python
from pymatgen.ext.matproj import MPRester
from pymatgen.core.composition import Composition
from pymatgen.analysis.phase_diagram import PhaseDiagram, PDPlotter, PDEntry

#Materials_ProjectのAPIキーに置き換える
API_KEY = "enter your api key here"

#組成とエネルギーに置き換える
composition = "Li16CaYb15F63"
energy = 0 #あなたの原子あたりのエネルギー

#Materials_Project_APIと組成を初期化
mpr = MPRester(API_KEY)
comp = Composition(composition)
elements = list(comp.elements)

#構成元素を含むすべての化合物をクエリ
entries = mpr.get_entries_in_chemsys([str(el) for el in elements])

#エントリにあなたの構造を追加
your_entry = PDEntry(composition=comp,energy=energy)
entries.append(your_entry)

#相図を作成
pd = PhaseDiagram(entries)

#分解とhull上のエネルギーを取得
decomp = pd.get_decomposition(comp)
e_above_hull = pd.get_e_above_hull(your_entry)

i=0
for entry, amount in decomp.items():
    entry.structure.to(filename=poscar_path, fmt="POSCAR"+str(i))
    i+=1
```

---

### 熱力学的安定性の感覚

DFTが対象とするT = 0 Kでは、ΔG = ΔHが成り立ちます。T = 298 KではΔG = ΔH - TΔSとなりますが、固体ではΔSは無視できるため、やはりΔG ≈ ΔHです。したがって一般に、計算結果についてはエンタルピーをGibbsエネルギーとして扱います。

Energy above the hull（E<sub>hull</sub>）は熱力学的安定性の指標となります。E<sub>hull</sub> = 0であれば0 Kで熱力学的に安定であり、E<sub>hull</sub> = 500 meV/atomであれば0 Kで熱力学的に不安定です。また、E<sub>hull</sub> ≤ 50-100 meV/atom程度の化合物は、しばしば「準安定」と呼ばれます。

では、準安定とは何でしょうか。準安定とは、熱力学的には不安定であるものの、実験的にはアクセス可能な状態を指します。例えば、高温からのクエンチング、メカノケミカルミリング、薄膜などによって得られます。

### LGPSの例

実験的センス（相図）から見ると、LGPSは298から約550 Kで熱力学的に安定です。一方、DFTセンス（E<sub>hull</sub> = 2meV/atom）から見ると、LGPSは0Kで熱力学的に不安定であり、Li<sub>4</sub>GeS<sub>4</sub>とLi<sub>3</sub>PS<sub>4</sub>に分解します。ただし、数値誤差がこの判断に影響することには注意が必要です。まとめると、LGPSはDFTレベルでは0Kで熱力学的に不安定である一方、298Kでは安定で実験的にアクセス可能です。そのため、LGPSは計算の観点から準安定と呼ばれます。

### なぜ生成エネルギーがしばしば議論されるのか？

E<sub>hull</sub>はP = exp(-E<sub>hull</sub>/kT)という形で相安定性とおおよそ対応しますが、生成エネルギーE<sub>f</sub>は相安定性とは対応しません。それにもかかわらず、特に機械学習の目的ではE<sub>f</sub>が採用されています。これは、E<sub>f</sub>が単元素（金属/ガス）からの反応によって明確に定義されるためです。一方、E<sub>hull</sub>はデータベース内の利用可能な競合相に依存するという曖昧さがあり、未知の競合相を見逃す可能性があります。

---

### エネルギーの正規化

VASPが出力するのは、系（セル）の全エネルギーです。例えば、Li<sub>20</sub>S<sub>10</sub>が-240 eV、Li<sub>3</sub>が-9 eV、S<sub>6</sub>が-72 eVと得られたとします。ここで2Li + S → Li<sub>2</sub>Sという反応を考えると、ΔE = -24 - (2×3 + 1×12) = -6 eVとなります。つまり、化学式単位（Li<sub>2</sub>S）あたりの生成エネルギーは-6 eV、原子あたりの生成エネルギーは-3 eVです。一般には、原子あたりのエネルギーを使用する方が良いでしょう。

---

### VASP出力ファイル

主な出力ファイルは次の通りです。

- 最適化構造：CONTCAR
- 電子およびイオンループのログ：OSZICAR
- 計算のログ：OUTCARおよびvasprun.xml
- 状態密度：DOSCAR
- 電子密度：CHGCAR
- MDの軌跡：XDATCAR
- …

CONTCAR、OSZICAR、OUTCARは手動でチェックすることができます。また、pymatgen.ioを使えばvasprun.xmlを自動的に読み取ることができます。

---

### POTCAR（擬ポテンシャル）

全電子を計算すると計算コストが高くなります。そこで、価電子のみを変化させ、コア電子は固定することを考えます。擬ポテンシャルは、このように固定されたコア電子と可変な価電子を持ちます。

#### 擬ポテンシャルの種類

擬ポテンシャルには、Ce vs Ce_3、Li vs Li_sv、Pb vs Pb_dのように、同じ元素でも複数の種類が用意されています。_sv、_pv、_dは内側のs、p、d軌道の電子を価電子として扱うことを意味し、_3はf電子を凍結コア電子として（価電子ではなく）扱うことを意味します。

どれを選ぶかは、推奨ポテンシャル（VASP wiki）またはMaterials Projectsによるポテンシャル選択を参照してください。

- https://docs.materialsproject.org/methodology/materials-methodology/calculation-details/gga+u-calculations/pseudopotentials
- https://www.vasp.at/wiki/index.php/Choosing_pseudopotentials

私の場合、ほとんどの場合MP選択を使用しています。より多くの電子を扱うほど正確になりますが、その分計算コストは高くなります。

---

### POSCAR（構造ファイル）

#### シンプルな方法
VESTAでcifを開く → vasp形式でエクスポート → 名前を"POSCAR"に変更

#### Python方法
構造を読み込んでPOSCARとしてエクスポートします。

```python
from pymatgen.core import Structure
structure = Structure.from_file('your-cif-path.cif')
structure.to_file('POSCAR')
```


Conventionalセルの選択が常に推奨されます。

なお、DFTは部分占有を扱えません。そのような場合は、スーパーセルを使用して{0, 1}秩序構造をモデル化する必要があります。

### POSCARの準備（私の場合）

わずかに無秩序な構造の場合は、pymatgenのorder-disorderパッケージを使用します。ただし、組み合わせ爆発のため、高度に無秩序な構造には重すぎます。高度に無秩序な構造の場合は、元のコード（ioncon）によるランダムサンプリング、SQS（Special Quasi-random Structure、icet）、クラスター展開（CULPAN）を使用します。難易度の低い操作としては、置換は手動（VESTA）またはpymatgenで、スーパーセルの作成は手動（VESTA）または元のコード（ioncon）で行えます。

---

## KPOINTS

k点はセルサイズa、b、cに応じて決めます。絶縁体（固体電解質）の場合は20/a、20/b、20/cのk点を、金属（電極）の場合は40/a、40/b、40/cを用います。基本的にはMonkhorst-Pack（MP）法を使用しますが、六方晶格子ではgamma-centered法を使用します。準備にはpymatgen.io.vaspを強く推奨します。なお、DFTMDの場合は、gamma-centeredの単一k点が通常使用されます。

---

## 典型的な構造最適化のためのINCAR

```bash
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
```

収束基準としては、EDIFFG = -0.01 / eV Å<sup>-1</sup>、EDIFF = 1e-4 / eVを用います。

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

M<sub>S</sub><sup>C</sup>という表記では、Mは元素、ホール（h）、電子（e）、または空孔（V）を表し、Sはホスト格子内のサイトを、Cは電荷（X：中性、●：正、'：負）を表します。

例として、Li_svを使う場合（Liではなく）を考えます。"Li_sv"は3電子を持ちます（"Li"ポテンシャルは1電子です）。Li<sup>+</sup>は"Li_sv"では2電子となります（Li<sup>+</sup>を"Li"で表すと0電子です）。したがって、Li<sup>+</sup>としてLiを除去する場合は2電子のみを除去します（3電子ではありません！）。同様に、F<sup>-</sup>としてFを除去する場合は8電子を除去します（7電子ではありません）。

## 欠陥構造最適化のためのINCAR

```bash
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
```

---

## 構造最適化自動入力ファイル準備

```python
from pymatgen.io.vasp import MPRelaxSet

#MP基本パラメータへの追加設定
incar={'NPAR': 5, 'LCHARG': False, 'EDIFF': 1e-4, 'EDIFFG': -0.01, 'ISMEAR': 0,
       'GGA': 'PS', 'NELM': 60, 'NSW': 200}

relax_set = MPRelaxSet(structure=mat,
                       user_incar_settings=incar,
                       user_potcar_settings={'Ba': 'Ba_sv', 'F': 'F'}, #またはこのタグを削除
                       user_potcar_functional='PBE_64')
relax_set.write_input(output_dir="./")
```

---

## NEBのためのINCAR

```bash
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
```

## DOSのためのINCAR

```bash
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
```

## MDのためのINCAR（NVTアンサンブル、Nose-Hoover熱浴）

```bash
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
```

---

## Materials Project計算条件調査

### 計算条件1

MPのデータベースには、GGA、GGA+U、meta-GGA r2SCANの計算結果が混在しています。r2SCANは、GGAに電子のkinetic energyを取り入れたmeta-GGAの一種です。SCANはより正確に反応エネルギーを計算できる一方、数値安定性（計算コストとの兼ね合い？）に課題がありました。r2SCANでは数値安定性も向上しており、HTスクリーニングに適用され始めています。とはいえ計算はまだ重いので、MPではGGA-PBEsolで構造緩和して、次にr2SCANを計算するという手順を取っています。GGA、GGA+U、meta-GGAのエネルギーをconsistentに比較するためのエネルギー補正スキームも一応存在します。r2SCANのカットオフエネルギーは高め（680 eV）です。k-meshはようわかりませんが、基本はMP法です。また、SCAN用のpseudo-potentialsは存在しないため、PBEのものを流用しています。以上を踏まえて、当面はMPRelaxでGGA+Uを使用し、r2SCANにはまだ手を出さないようにします。

### エネルギー補正

エネルギー補正には、Anion GGA/GGA+U補正とGGA/GGA+U/r2SCAN補正があります。現状と過去はanion GGA/GGA+U補正が使われているようですが、今後は後者の補正に変わります。GGAとGGA+U補正のエネルギー比較にも補正が必要です。GGA/GGA+U補正はAPIでは自動で行われるようですが、本当でしょうか？

### 絶対値誤差の原因（系統）

まず、0K、0atom vs 1atom？RTの条件差により、30meV/atom以下の誤差が生まれるとのことです [S. Lany, Phys. Rev. B 78 2008 1-8]。また、重元素では相対論効果（大きな原子核の正電荷と電子の相互作用）が誤差要因となり、ゼロ点エネルギーももちろん誤差に含まれます。個別の誤差は大きいものの、反応エネルギー的な相対評価では絶対値誤差の中心値は0になるため、問題ありません。

### 計算条件2

MPでは基本的に、スピン分極ありで、初期スピン配列はハイスピンの強磁性を採用しています。Inorganic Solid Fluoridesから引用すると、"Strong electronic localization excludes narrow-band or itinerant electron magnetism. As a consequence of lower covalency the magnetic interactions are weaker. At first approximation they often concern only the nearest-neighbor magnetic cations…. High-spin configurations are much more common for fluorides than for oxides due to smaller d-orbital splitting." とあり、フッ化物はHigh-spin配列を採用して良さそうです。そのほかの条件は、カットオフエネルギーが520 eV、k-point meshが1000/(number of atoms in the cell)、k点はMP法（ただし六方晶セルはΓ-centered）、k点積分はtetrahedron法となっており、このあたりはそのまま使います。

### 計算条件3：ハバード（Hubbard）モデル

非局在化電子（混成が強く、バンド幅が広い）では、他の電子との相互作用（電子のポテンシャル場）は平均化された状態にあります。一方、局在電子の場合は、電子間の相互作用が平均場で記述できないという問題があります。これは同一原子内の電子の相互作用を指します。フッ化物イオンは共有結合性が低く（M-Fの軌道の重なりが小さい）、バンド幅は狭く、電子は局在化する傾向にあるため、局在電子相関のUを取り入れる必要があります。これは特に、遷移金属化合物の酸化還元電位を計算する場合に重要です。U-valuesはOxidesの生成エネルギーの実験値を元に補正されており、Co、Cr、Fe、Mn、Mo、Ni、V、Wで補正済みです。FとOは厳密には別の値が定義されるべきですが、MPではUは酸化物の値で統一されています。なお、Uはpseudo-potential依存であり、結晶サイトにも依存しますが、全サイトに同じ値が適用されます。

### 反応電位計算に関する文献

#### D. H. McTaggart et al., Assessing ternary materials for fluoride-ion batteries, Sci. data, 10:90 (2023)

フッ化物の３元系の反応電位を調査した論文で、MPのGGA/GGA+Uの計算条件に準拠しています。結論の見えないよくわからない論文ですが、70meV/atom以下を対象にしているので、この値を使うことにします。

#### A. Jain et al., Formation enthalpies by mixing GGA and GGA+U calculations, Phys. Rev. B, 84, 045115 (2011)

有名なCederグループの報告で、GGAとGGA+Uを比較するための補正を提案しています。GGA+Uは遷移金属フッ化物（酸化物）で必要ですが、遷移金属のメタルではGGA+Uはもはや不要で、GGA計算が必要です。コンバージョン反応系は金属と金属フッ化物間の反応であり、それぞれ計算条件（U有り無し）が異なるため、GGAとGGA+Uの比較が困難でした。この文献では、補正式を用いることで、LiFeF<sub>3</sub>のリチウムコンバージョン電極の電位がGGA単体より高精度に求まったと述べられています。この考え方は、フッ化物電池の電極活物質の計算でも重要になります。

### 計算条件4

MPRelaxでGGA+Uを使用します。使用する値は次の通りです。

- U-value：Co: 3.32、Cr: 3.7、Fe: 5.3、Mn: 3.9、Mo: 4.38、Ni: 6.2、V: 3.25、W: 6.2
- ΔE<sub>M</sub>：V: -1.7、Cr: -1.999、Mn: -1.668、Fe: -2.256、Co: -1.638、Ni: -2.541、W: -4.438、Mo: -3.202

### 計算条件5：MaterialsProject2020補正

#### アニオン補正

酸化物では、結合長によりperoxide、superoxideに分類されます。他のアニオンでは酸化数分類は未適用です。アニオンか否かの判別は、酸化数判別か、もっとも電気陰性度の高い元素であるかのいずれかで行われます。部分的にフッ素を導入した組成ではアニオン判別が切り替わってしまうため、やはりこの補正はかけたくありません。
