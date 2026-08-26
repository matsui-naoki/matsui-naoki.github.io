## Blenderによる3D結晶構造/デバイスモデルの作成

---

## 0. はじめに
デバイス/材料開発において、アピーリングな画像を丹念に作成することは、新たな物質的価値を生み出すものではなく、その観点では生産性が低いといえます。一方で、予算の申請書や高IF雑誌への掲載を狙うための綺麗な図、広報資料としてのキャッチーな研究イメージ図の作成は、大切な技術です。サイエンスグラフィックスなどの専門家に依頼することもできますが、研究者自身が作成することもあります。特に論文中の図を簡単に自身でつくることができれば、アクセプト率が上がると思われます。以前、パワポで作ったデバイスのイメージ図を利用して高IF雑誌に投稿したところ、図が適切でないと指摘され、アクセプトされなかったことがあります。本来の物質的価値の観点での生産性とは関連の無い残念な話ではありますが、Blender等でキャッチーな3D図を作成することは、研究者にとって重要なスキルと言えます。一方、Blenderは3Dモデリングソフトウェアであり、さらに、ほとんどの（動画）教材は英語で作成されているため、日本人にとって利用障壁が高く、学習曲線が急で、初心者には難しいと感じられることもあります。また、企業で（大学でも）内部資料として洗練された綺麗な図を作ることは生産性を著しく低下させるので、避けるべきです。以下は、私が2-3日で学習して覚えたことを備忘録的にまとめたものです。

---

## 1. 初期設定
### インストールと設定

まず、Blender 4.2.xx LTSをダウンロードし、applicationsフォルダに保存します。アプリケーションファイルの名前をBlender4.2.10LTSなどに変更すれば、複数バージョンを管理できます（250812現在、4.5.1 LTSが最新です）。Blenderを起動したら、必要なアドオンをインストールします。結晶構造の読み込みには、wrlファイル読み込みアドオンが必要です（[参考](https://aobeco.com/blender-3dcg/)）。

---
## 2. 基本操作(mac)
### 🎮 基本変形操作

| キー | 機能 | 補足 |
|------|------|------|
| **G** | 移動（Glide） | + X/Y/Z で軸制限 |
| **R** | 回転（Rotate） | + Shift+X/Y/Z で指定軸以外 |
| **S** | 拡大縮小（Scale） | 数値入力で精密制御可能 |
| **Tab** | 編集モード切替 | Object ⇔ Edit Mode |
| **H** | オブジェクトを隠す | |
| **Option+H** | 隠したものを表示 | |

### 🖱️ マウス操作

| 操作 | 機能 |
|------|------|
| スクロール | ビュー回転 |
| Shift + スクロール | ビュー並進 |
| Control + スクロール | ズーム |
| Shift + クリック | 複数選択/解除 |

### ⚙️ レンダリング推奨設定

| 項目 | 推奨値 |
|------|--------|
| レンダーエンジン | Cycles |
| 最大サンプル数 | 512-1024 |
| ノイズ閾値 | 0.1 |
| Light Paths > Transparent | 16-32 |
---
## 3. 描画ノウハウ
### 複合体
ここでは、電極と固体電解質の複合体電極のモデリングや、固体電解質の粒界モデリングに有効な手法をいくつかまとめます。

編集したいオブジェクトを選択して上部のGeometry nodeをクリックすると、Geometryノードエディタが開きます。

低解像度ほど丸まった粒子、高解像度ほど角張った粒子を表現できます。高解像度の場合は表面の段差が目立つので、スムーズシェードで後処理するとよいでしょう。


#### 3.1. 最も簡単なコンポジット (F1 score + Euclidean + 2x colorramp)
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/powder_composite1.png" alt="ed">
    <p>VoronoiとF1スコア</p>
  </div>
</div>

#### 3.2. 結晶粒界 (端との距離 + 小スケール + 狭いカラーランプ範囲, 高解像度)
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/powder_composite2.png" alt="ed">
    <p>Voronoiと結晶粒界</p>
  </div>
</div>

#### 3.3. 三種類以上のコンポジット (Mathノードを使った明確な分離)
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/powder_composite3.png" alt="ed">
    <p>Voronoiとmathノードによる粒子の色配置</p>
  </div>
</div>

#### 3.4. 複合電極 + 空隙 (Voronoi/端との距離 を2個かさねて描画. 色々試したが、結局これが簡単で良い!)
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/powder_composite4.jpg" alt="ed">
    <p>Voronoiノードの二重描画</p>
  </div>
</div>


#### 3.5. 複合電極　ノイズテクスチャ

粒子表面に、ノイズテクスチャでディスプレイスメント変形を加えます。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/particle.png" alt="ed">
    <p>noise-surface-particle</p>
  </div>
</div>

細かいテクスチャでは、粒子表面のざらつきが目立ちません。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/powder_composite5.jpg" alt="ed">
    <p>複合電極 ノイズテクスチャ比較</p>
  </div>
</div>

ややラフ（粗）にする方が良い結果になります。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/particle_surface.jpg" alt="ed">
    <p>ノイズテクスチャ　密度を低く</p>
  </div>
</div>


#### 3.5. 複合電極 画像テクスチャ
#### 3.5.1. 事前に用意した画像テクスチャで表面のざらつきを表現

粒子表面に、岩やアスファルトの画像のテクスチャを貼り付けます。前処理として、uv球を作成してタブから編集モードに入り、右クリックから細分化を選択して、左下の細分化タブで分割数を50-100に設定します。後処理としては、下地を光沢BSDF（灰色、粗さ0.3）とし、ライトはサンの強さを20にします。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/texture.jpg" alt="ed">
    <p>パーティクルへの画像テクスチャ</p>
  </div>
</div>

#### 3.5.2. 複合電極に画像テクスチャを適用

複合電極に画像テクスチャを適用すると、ディスプレイスメントがうまく機能しない問題があります（なぜでしょうか？）。

#### 3.5.3. 派生 : 立体的なエネルギーランドスケープポテンシャル

ポテンシャルのヒートマップ画像を面にテクスチャで貼り付けると、立体的なエネルギーランドスケープが描けます。手順は以下の通りです。

1. 前処理1 : 平面→タブから編集モード→右クリック・細分化→左下の細分化タブから分割数100
2. 前処理2 : VESTAでポテンシャルのヒートマップを作成 (以下の例はBVELの二次元スライスをRGBとGreyスケールでそれぞれスクショした)
3. 平面でディスプレイスメントをかけてテクスチャにGrayスケール画像を選択
4. ディスプレイスメントの強さを調整して、適用からボリューム化（確定）
5. シェーダーノードからRGB画像をテクスチャとして適用し、Z軸方向にアルファ値を適用
6. 後処理1 : 後述する原子の軌跡を作製
7. 後処理2 : 背景やライトの調整、コンポジターノードで光彩比を調整

<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/potential_procedure.jpg" alt="ed">
    <p>手順 VESTA ~ Blender</p>
  </div>
</div>

最終的につくった画像が以下です。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/potential_migration.jpg" alt="ed">
    <p>ポテンシャルの谷をイオンが移動する模様</p>
  </div>
</div>



### 光彩 (Bloom)

<div class="large-photo-container">
<div class="large-photo-content">

#### 設定手順

1. **Compositingノードを起動** (上部タブ)
2. **ノードを追加をアクティベート** (上部チェックボックス)
3. 何も無いところで右クリック → 追加 → フィルター → グレア
4. グレアノードをレンダーレイヤーとコンポジットノードの間に配置
5. 光の筋をブルームに変更、**ミックスを-0.7程度に設定**
   > **注記**: ミックスは-1が元画像のみ、0で50/50、1で処理済み画像のみになるので、比率を変えながら光彩の強さを調整する
6. 右上のレンダーを押して、ビューポートシェーディング（▽マーク）からコンポジターを常時に設定
7. マテリアルの放射(Emission)のカラーと強さ(1-3程度)を設定

</div>
<div class="large-photo-panel">
<img src="/blender/compositing.png" alt="Compositingノード設定画面">
<p style="text-align: center;">設定画面</p>
</div>
</div>


---

## 5. その他リンク・リソース

### 📚 チュートリアル・参考資料

- **多孔質材料や結晶粒のモデリング**  
  [YouTube Tutorial](https://www.youtube.com/watch?v=A3ebrDtkLGY)

- **データの可視化**  
  [BlenderDataVis - GitHub](https://github.com/Griperis/BlenderDataVis)

- **Blender × Pythonコーディング**  
  [blender-scripting - GitHub](https://github.com/njanakiev/blender-scripting)

- **テクスチャtips note**  
  [Note](https://note.com/kitaniosam)

### 🔧 Python環境設定

BlenderのPython環境にモジュールを追加インストールするには、以下のようにBlender内蔵のPythonからpipを実行します。
${codeBlock}
/Applications/Blender4.2.10LTS.app/Contents/Resources/4.2/python/bin/python3.11 -m pip install scipy
${codeBlock}
