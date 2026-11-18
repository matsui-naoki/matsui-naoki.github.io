## VASP

### 注意事項
はじめにお断りしておくと、筆者は計算理論の専門家ではありません。そのため、このページでは実用的な使用法と、非常にシンプルで限定的なDFTの側面のみを扱います。

---

### VASP概要
VASPは、密度汎関数理論（DFT）に基づく第一原理計算パッケージです。計算を実行するには、次の4つの入力ファイルを用意します。

- INCAR：計算パラメータを指定するファイル
- POTCAR：擬ポテンシャルのファイル
- KPOINTS：k点を指定するファイル
- POSCAR：初期構造のファイル

### 最適化プロセス

VASPの構造最適化は、電子密度の最適化（Electronic loop）と構造最適化（Ionic loop）の二重のループで進みます。

![VASPの電子ループとイオンループの模式図](/learning/vasp/scf-ionic-loops.webp "電子ループ（左）で電子密度とエネルギーを収束させ、その力を使ってイオンループ（右）で原子を動かします。両者を交互に繰り返し、力がEDIFFG以下になると緩和構造が得られます。")

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

![相対エネルギーの考え方](/learning/vasp/relative-energy.webp "状態iと状態jをそれぞれ計算し、その差ΔE = E<sub>X,j</sub> − E<sub>X,i</sub>を議論します。ΔEが負（例：−1 eV）なら発熱的です。")

#### 相対エネルギーの種類

代表的な相対エネルギーには、次の5種類があります。

1. **反応エネルギー**：反応物と生成物間の相対エネルギーです。A + B → ABという反応では、E = E(AB) - (E(A) + E(B))で定義されます。

2. **生成エネルギー**（Gibbs生成エネルギーのような）：金属（および/またはガス）から化合物への反応エネルギーです。例えば2Li + S → Li<sub>2</sub>Sという反応ではE<sub>formation</sub> = E(Li<sub>2</sub>S) - (2×E(Li) + E(S))、3Li + P + 4S → Li<sub>3</sub>PS<sub>4</sub>という反応ではE<sub>formation</sub> = E(Li<sub>3</sub>PS<sub>4</sub>) - (3×E(Li) + E(P) + 4×E(S))となります。

3. **Energy above the convex hull**：競合相とターゲット系の間の相対エネルギーです。2Li + S → Li<sub>2</sub>Sに対してはE<sub>hull</sub> = E(Li<sub>2</sub>S) - 2×E(Li) - E(S)、3/2Li<sub>2</sub>S + 1/2P<sub>2</sub>S<sub>5</sub> → Li<sub>3</sub>PS<sub>4</sub>に対してはE<sub>hull</sub> = E(Li<sub>3</sub>PS<sub>4</sub>) - (3/2×E(Li<sub>2</sub>S) + 1/2E(P<sub>2</sub>S<sub>5</sub>))となります。

4. **Migration energy**：安定点とサドルポイント間の相対エネルギーで、E<sub>mig</sub> = E(saddle) - E(initial)と定義されます。

5. **欠陥形成エネルギー**：内在欠陥にはFrenkel型（M<sub>M</sub> + V<sub>i</sub> → V<sub>M</sub> + M<sub>i</sub>）とSchottky型（M<sub>M</sub> + X<sub>X</sub> → V<sub>M</sub> + V<sub>X</sub> + MX）があります。外因性欠陥はMO<sub>2</sub> → x/2O<sub>2</sub> + MO<sub>2-x</sub>のように、ドーピングはMO<sub>2</sub> + 0.1AO → M<sub>0.9</sub>A<sub>0.1</sub>O<sub>1.9</sub> + 0.1MO<sub>2</sub>のように表されます。

![移動エネルギーの模式図](/learning/vasp/migration-energy.webp "移動エネルギーE<sub>mig</sub>は、初期状態とサドルポイント（鞍点）のエネルギー差です。図はF<sup>−</sup>空孔（V<sub>F</sub>）を介したイオンの移動の例です。")

**相対エネルギーは反応によって厳密に定義されます！** 言い換えれば、上記の指標を得るためには、事前に反応を定義しておく必要があります。

### 生成エネルギーの曖昧さ

ほとんどの場合、生成エネルギーは金属（および/またはガス）から化合物への反応エネルギーとして定義され、この文脈はMaterials Projectでも一般的です。しかし実際には、生成エネルギーが任意の反応に対して与えられていることもしばしばあります。いずれにせよ、反応を指定することによって生成エネルギーを定義する必要があります。

### Materials Projectにおける生成エネルギーとE<sub>hull</sub>

生成エネルギーとE<sub>hull</sub>は同じものではありません。生成エネルギーは金属（および/またはガス）から化合物への反応エネルギーによって定義されます。一方、例えばLi<sub>2</sub>S + S → 2LiSという反応を考えると、E<sub>hull</sub>(LiS) [eV atom<sup>-1</sup>] = (2E(LiS) - E(Li<sub>2</sub>S) - E(S))/4のように計算されます。

![Li–S系の生成エネルギーとEhullの違い](/learning/vasp/formation-vs-ehull.webp "Li–S二元系の例。縦軸は原子あたりの生成エネルギー、横軸は組成です。生成エネルギーE<sub>F</sub>は単体（Li、S）を結んだ点線からの深さ、E<sub>hull</sub>は安定相を結んだ凸包（赤線）からの高さです。")

#### 凸包（convex hull）とE<sub>hull</sub>の考え方

Li–S二元系で、LiSのE<sub>hull</sub>を求める手順を考えます。まず安定な構造（Li、S、Li<sub>2</sub>S）を特定し、それらを結んだ凸包（convex hull）を作ります。次に、ターゲットであるLiSをこの図の上に置きます。

LiSが凸包より上にある場合、E<sub>hull</sub>は正の値になります。このときLiSの競合相はLi<sub>2</sub>SとSであり、E<sub>hull</sub>は分解反応LiS → 1/2Li<sub>2</sub>S + 1/2Sの反応エネルギーΔE（分解エネルギー）を使って、E<sub>hull</sub> = −ΔEと表されます。

![LiSが凸包より上にある場合](/learning/vasp/ehull-above-hull.webp "LiSが凸包の上にあるとき、凸包までの高さがE<sub>hull</sub>（正の値）です。競合相はLi<sub>2</sub>SとSです。")

一方、LiSが既存の凸包より下にある場合は、LiS自身が新たな安定相となって凸包が更新され、E<sub>hull</sub>はゼロになります。このときの反応は「凸包上のLiS → LiS」であり、ΔE = 0です。

![LiSが凸包より下にある場合](/learning/vasp/ehull-on-new-hull.webp "LiSが既存の凸包（点線）より下にあると、凸包が更新され（実線）、LiSのE<sub>hull</sub>はゼロになります。")

このように、E<sub>hull</sub>の測り方には「更新前の凸包に対して測る」方法と「更新後の凸包に対して測る」方法の2通りがあります。ほとんどの場合は更新後の凸包が使われますが、凸包を更新すると、他の構造のE<sub>hull</sub>まで変わってしまうという問題があります。そのため、GNoMEやMatterverseでは、Materials Projectの更新前（固定）の凸包に対するE<sub>hull</sub>を用いています。pymatgenの相図オブジェクトでは、`allow_negative`の指定でこれを切り替えられます。更新前の凸包に対して測る場合（`allow_negative=True`）は負の値をとりえ、更新後の凸包に対して測る場合（`allow_negative=False`）はゼロになります。

![更新前の凸包と更新後の凸包](/learning/vasp/ehull-previous-vs-renewed.webp "青線が更新前の凸包、赤線がLiSを加えて更新した凸包です。LiS<sub>2</sub>のE<sub>hull</sub>は、どちらの凸包に対して測るかで値が変わります。")

### Energy above the hullの計算

E<sub>hull</sub>は、次の手順で計算します。

1. 相図を作成し、化学系内の安定エントリ（●）を特定します
2. ターゲット化合物の競合相を特定します
3. 分解反応を定義してΔEを計算します（ΔE = -E<sub>hull</sub>）

![三元系での競合相](/learning/vasp/competing-phases.webp "三元系A–B–Cの相図での競合相の例。ターゲットが安定相どうしを結ぶ線（タイライン）上にある場合は2相、安定相がつくる三角形の内側にある場合は3相が競合相になります（●は熱力学的に安定な化合物）。")

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

実験的な観点（相図）から見ると、LGPSは298 Kから約550 Kの範囲で熱力学的に安定です。一方、DFTの観点（E<sub>hull</sub> = 2 meV/atom）から見ると、LGPSは0 Kで熱力学的に不安定であり、Li<sub>4</sub>GeS<sub>4</sub>とLi<sub>3</sub>PS<sub>4</sub>に分解します。ただし、この程度の差では数値誤差が判断に影響しうることに注意が必要です。まとめると、LGPSはDFTレベルでは0 Kで熱力学的に不安定である一方、298 Kでは安定で、実験的にもアクセス可能です。そのため、LGPSは計算の観点から準安定と呼ばれます。

### なぜ生成エネルギーがしばしば議論されるのか？

E<sub>hull</sub>はP = exp(-E<sub>hull</sub>/kT)という形で相安定性とおおよそ対応しますが、生成エネルギーE<sub>f</sub>は相安定性とは対応しません。それにもかかわらず、特に機械学習の目的ではE<sub>f</sub>が採用されています。これは、E<sub>f</sub>が単元素（金属/ガス）からの反応によって明確に定義されるためです。一方、E<sub>hull</sub>はデータベース内の利用可能な競合相に依存するという曖昧さがあり、未知の競合相を見逃す可能性があります。

---

### エネルギーの正規化

VASPが出力するのは、系（セル）の全エネルギーです。例えば、Li<sub>20</sub>S<sub>10</sub>が-240 eV、Li<sub>3</sub>が-9 eV、S<sub>6</sub>が-72 eVと得られたとします。ここで2Li + S → Li<sub>2</sub>Sという反応を考えると、ΔE = -24 - (2×(-3) + 1×(-12)) = -6 eVとなります。つまり、化学式単位（Li<sub>2</sub>S）あたりの生成エネルギーは-6 eV、原子あたり（3原子）の生成エネルギーは-2 eVです。一般には、原子あたりのエネルギーを使用する方が良いでしょう。

---

### VASP出力ファイル

主な出力ファイルは次の通りです。

- CONTCAR：最適化構造
- OSZICAR：電子ループおよびイオンループのログ
- OUTCAR、vasprun.xml：計算全体のログ
- DOSCAR：状態密度
- CHGCAR：電子密度
- XDATCAR：MDの軌跡
- その他

CONTCAR、OSZICAR、OUTCARは中身を直接開いて確認できます。また、pymatgen.ioを使えばvasprun.xmlを自動的に読み取ることができます。

---

### POTCAR（擬ポテンシャル）

すべての電子を計算に含めると、計算コストが高くなります。そこで、コア電子は固定し、価電子のみを変化させることを考えます。擬ポテンシャルは、このように固定されたコア電子と、変化する価電子から構成されます。

#### 擬ポテンシャルの種類

擬ポテンシャルには、Ce vs Ce_3、Li vs Li_sv、Pb vs Pb_dのように、同じ元素でも複数の種類が用意されています。_sv、_pv、_dは内側のs、p、d軌道の電子を価電子として扱うことを意味し、_3はf電子を凍結コア電子として（価電子ではなく）扱うことを意味します。

どれを選ぶかについては、VASP wikiの推奨ポテンシャル、またはMaterials Projectで採用されているポテンシャルを参照してください。

- https://docs.materialsproject.org/methodology/materials-methodology/calculation-details/gga+u-calculations/pseudopotentials
- https://www.vasp.at/wiki/index.php/Choosing_pseudopotentials

私はほとんどの場合、MPと同じ選択を使用しています。価電子として扱う電子が多いほど計算は正確になりますが、その分計算コストは高くなります。

---

### POSCAR（構造ファイル）

#### シンプルな方法

VESTAでcifファイルを開き、VASP形式でエクスポートしてから、ファイル名を"POSCAR"に変更します。

#### Pythonを使う方法

pymatgenで構造を読み込み、POSCARとして書き出します。

```python
from pymatgen.core import Structure
structure = Structure.from_file('your-cif-path.cif')
structure.to_file('POSCAR')
```

セルは、常にconventionalセルを選ぶことを推奨します。

なお、DFTでは部分占有を扱えません。そのような場合は、スーパーセルを使用して{0, 1}秩序構造をモデル化する必要があります。

### POSCARの準備（私の場合）

無秩序性がわずかな構造の場合は、pymatgenのorder-disorder機能を使用します。ただし、組み合わせ爆発が起こるため、無秩序性の高い構造には計算が重すぎます。無秩序性の高い構造の場合は、自作コード（ioncon）によるランダムサンプリング、SQS（Special Quasi-random Structure、icet）、クラスター展開（CULPAN）を使用します。より簡単な操作のうち、元素置換は手動（VESTA）またはpymatgenで、スーパーセルの作成は手動（VESTA）または自作コード（ioncon）で行えます。

---

## KPOINTS

k点はセルサイズa、b、cに応じて決めます。絶縁体（固体電解質）の場合は20/a、20/b、20/cのk点を、金属（電極）の場合は40/a、40/b、40/cを用います。基本的にはMonkhorst-Pack（MP）法を使用しますが、六方晶格子ではgamma-centered法を使用します。KPOINTSの準備にはpymatgen.io.vaspの利用を強く推奨します。なお、DFT-MDの場合は、通常gamma-centeredの単一k点（Γ点のみ）を使用します。

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

収束基準としては、EDIFFG = -0.01（eV Å<sup>-1</sup>）、EDIFF = 1e-4（eV）を用います。

---

## 異原子価元素置換の実践

異原子価元素置換（例：2Li → Mg + 空孔）を行う構造の計算は、次の手順で進めます。

1. プリミティブセルを構造最適化します（ISIF = 3、ENCUT = 520）
2. スーパーセル（a, b, c > 10 Å）を作成し、再度最適化します（ISIF = 3、ENCUT = 520、ISMEAR = 0）
3. 2 Li → Mg + Vに置き換えて最適化します（ISIF = 2、ENCUT = 400、ISYM = 0）。このとき、Mgを含むPOTCARと、新しいセルに合わせたKPOINTSを準備します
4. 得られた構造を用いて、相安定性解析やMDなどを行います

![異原子価元素置換の手順](/learning/vasp/aliovalent-substitution.webp "LiFを例にした異原子価置換の手順。プリミティブセルの最適化（1）、スーパーセルの作成と再最適化（2）、2Li → Mg + 空孔の置換と内部座標の最適化（3）の順に進めます。")

---

## 背景電荷補償系の実践

### Kröger-Vink記法

M<sub>S</sub><sup>C</sup>という表記では、Mは元素、ホール（h）、電子（e）、または空孔（V）を表し、Sはホスト格子内のサイトを、Cは電荷（X：中性、●：正、'：負）を表します。

イオン結晶では、LiFからLiを1つ取り除く操作は、Li<sup>+</sup>の空孔V<sub>Li</sub>′を作ることとして扱うべきです。単純に原子ごと取り除くと、電子も一緒に抜けて中性の空孔V<sub>Li</sub><sup>×</sup>になってしまいます。負に帯電したV<sub>Li</sub>′を作るには、系の電子数NELECTを自分で指定し、余った電荷を一様な背景電荷で打ち消します。これを背景電荷補償と呼びます。

![中性空孔と負に帯電した空孔の違い](/learning/vasp/kroger-vink-defects.webp "左：Liを原子ごと除くと中性の空孔V<sub>Li</sub><sup>×</sup>になり、NELECTの指定は不要です（40 → 37）。右：Li<sup>+</sup>として除き負に帯電した空孔V<sub>Li</sub>′を作るには、NELECTを指定する必要があります（40 → 38）。数字は各原子の価電子数（Li_svは3、Li<sup>+</sup>は2、Fは7、F<sup>−</sup>は8）です。")

### 除去する電子数の数え方

電荷補償を背景電荷で扱う場合は、NELECTで系の電子数を指定します。このとき、除去する電子の数はPOTCARの価電子数に依存します。例として、"Li"ではなく"Li_sv"を使う場合を考えます。"Li_sv"は3電子を持ちます（"Li"ポテンシャルは1電子です）。Li<sup>+</sup>は"Li_sv"では2電子となります（Li<sup>+</sup>を"Li"で表すと0電子です）。したがって、Li<sup>+</sup>としてLiを除去する場合は2電子のみを除去します（3電子ではありません！）。同様に、F<sup>-</sup>としてFを除去する場合は8電子を除去します（7電子ではありません）。

実際の手順では、まずスーパーセルを作って最適化し（ISIF = 3、ENCUT = 520、ISMEAR = 0）、OUTCARから系の電子数を確認します（`grep NELECT OUTCAR`）。例えばNELECT = 300であれば、Li<sup>+</sup>を1つ除く場合はNELECT = 300 − 2 = 298と指定し、ISIF = 2、ENCUT = 400、ISYM = 0で最適化します。

![電荷が釣り合わない系の計算手順](/learning/vasp/charge-unbalanced-nelect.webp "Li_svポテンシャルを使い、LiFのスーパーセルからLi<sup>+</sup>を1つ除く例。OUTCARでNELECT = 300を確認し、2電子少ないNELECT = 298を指定して最適化します。")

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

MPのデータベースには、GGA、GGA+U、meta-GGA（r2SCAN）の計算結果が混在しています。r2SCANは、GGAに電子の運動エネルギー密度を取り入れたmeta-GGAの一種です。SCANは反応エネルギーをより正確に計算できる一方で、数値安定性（計算コストとの兼ね合い？）に課題がありました。r2SCANでは数値安定性も向上しており、ハイスループット（HT）スクリーニングにも適用され始めています。とはいえ計算はまだ重いため、MPではGGA-PBEsolで構造緩和してから、r2SCANで計算するという手順を取っています。GGA、GGA+U、meta-GGAのエネルギーを一貫して比較するためのエネルギー補正スキームも、一応存在します。r2SCANのカットオフエネルギーは高め（680 eV）です。k-meshの詳細はよく分かりませんが、基本はMP法です。また、SCAN用の擬ポテンシャルは存在しないため、PBE用のものを流用しています。以上を踏まえて、当面はMPRelaxでGGA+Uを使用し、r2SCANにはまだ手を出さないことにします。

### エネルギー補正

エネルギー補正には、Anion GGA/GGA+U補正とGGA/GGA+U/r2SCAN補正があります。これまではAnion GGA/GGA+U補正が使われてきたようですが、今後は後者の補正に切り替わります。また、GGAとGGA+Uの計算エネルギーを比較する際にも補正が必要です。GGA/GGA+U補正はAPI経由では自動で適用されるようですが、この点は確認が必要です。

### 絶対値誤差の原因（系統）

まず、0 Kと室温（RT）という条件の差（0 atom vs 1 atom？）により、30 meV/atom以下の誤差が生じるとされています [S. Lany, Phys. Rev. B 78 2008 1-8]。また、重元素では相対論効果（大きな原子核の正電荷と電子の相互作用）が誤差の要因となり、ゼロ点エネルギーももちろん誤差に含まれます。個々の誤差は大きいものの、反応エネルギーのような相対評価では絶対値誤差の中心値が0になるため、問題はありません。

### 計算条件2

MPでは基本的にスピン分極を考慮し、初期スピン配列にはハイスピンの強磁性配列を採用しています。Inorganic Solid Fluoridesから引用すると、"Strong electronic localization excludes narrow-band or itinerant electron magnetism. As a consequence of lower covalency the magnetic interactions are weaker. At first approximation they often concern only the nearest-neighbor magnetic cations…. High-spin configurations are much more common for fluorides than for oxides due to smaller d-orbital splitting." とあり、フッ化物ではハイスピン配列を採用して良さそうです。そのほかの条件は、カットオフエネルギーが520 eV、k-point meshが1000/(number of atoms in the cell)、k点はMP法（ただし六方晶セルはΓ-centered）、k点積分はtetrahedron法となっており、このあたりはそのまま使います。

### 計算条件3：ハバード（Hubbard）モデル

非局在化した電子（混成が強く、バンド幅が広い）では、他の電子との相互作用（電子が感じるポテンシャル場）は平均化された状態にあります。一方、局在した電子の場合は、同一原子内の電子間の相互作用を平均場では記述できないという問題があります。フッ化物は共有結合性が低く（M-Fの軌道の重なりが小さく）、バンド幅が狭いため、電子が局在化する傾向にあります。そのため、局在電子の相関を表すUを取り入れる必要があります。これは特に、遷移金属化合物の酸化還元電位を計算する場合に重要です。U値は酸化物の生成エネルギーの実験値をもとに決められており、Co、Cr、Fe、Mn、Mo、Ni、V、Wについて値が用意されています。厳密にはフッ化物と酸化物で別の値を定義すべきですが、MPではUは酸化物の値で統一されています。なお、Uは擬ポテンシャルに依存し、結晶サイトにも依存しますが、MPでは全サイトに同じ値が適用されます。

### 反応電位計算に関する文献

#### D. H. McTaggart et al., Assessing ternary materials for fluoride-ion batteries, Sci. data, 10:90 (2023)

フッ化物の3元系の反応電位を調査した論文で、MPのGGA/GGA+Uの計算条件に準拠しています。結論がやや分かりにくい論文ですが、E<sub>hull</sub>が70 meV/atom以下の化合物を対象にしているので、この値を基準として使うことにします。

#### A. Jain et al., Formation enthalpies by mixing GGA and GGA+U calculations, Phys. Rev. B, 84, 045115 (2011)

有名なCederグループの報告で、GGAとGGA+Uの計算結果を比較するための補正を提案しています。遷移金属フッ化物（酸化物）ではGGA+Uが必要ですが、遷移金属の金属単体ではGGA+Uは不要で、GGAで計算する必要があります。コンバージョン反応は金属と金属フッ化物の間の反応であり、両者で計算条件（Uの有無）が異なるため、GGAとGGA+Uの結果を比較することが困難でした。この文献では、補正式を用いることで、LiFeF<sub>3</sub>のリチウムコンバージョン電極の電位がGGA単体より高精度に求まったと述べられています。この考え方は、フッ化物電池の電極活物質の計算でも重要になります。

### 計算条件4

MPRelaxでGGA+Uを使用します。使用する値は次の通りです。

- U値：Co: 3.32、Cr: 3.7、Fe: 5.3、Mn: 3.9、Mo: 4.38、Ni: 6.2、V: 3.25、W: 6.2
- ΔE<sub>M</sub>：V: -1.7、Cr: -1.999、Mn: -1.668、Fe: -2.256、Co: -1.638、Ni: -2.541、W: -4.438、Mo: -3.202

### 計算条件5：MaterialsProject2020補正

#### アニオン補正

酸化物では、結合長に応じて過酸化物（peroxide）、超酸化物（superoxide）に分類されます。他のアニオンには、このような酸化数による分類は適用されていません。ある元素がアニオンかどうかは、酸化数による判別か、最も電気陰性度の高い元素であるかどうかのいずれかで判断されます。部分的にフッ素を導入した組成ではアニオンの判別が切り替わってしまうため、やはりこの補正はかけたくありません。
