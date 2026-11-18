## Blenderによる3D結晶構造/デバイスモデルの作成

---

## 0. はじめに
デバイス/材料開発において、見栄えの良い画像を丹念に作成しても、新たな物質的価値が生まれるわけではありません。その意味では、生産性の低い作業といえます。一方で、予算の申請書や高IF誌への掲載を狙うための綺麗な図、広報資料としてのキャッチーな研究イメージ図を作成することは、大切な技術です。サイエンスグラフィックスなどの専門家に依頼することもできますが、研究者自身が作成することもあります。特に、論文中の図を自分で手軽に作れれば、アクセプト率が上がると思われます。実際に私は以前、パワーポイントで作ったデバイスのイメージ図を用いて高IF誌に投稿したところ、図が適切でないと指摘され、アクセプトされなかったことがあります。本来の物質的価値とは関係の無い残念な話ではありますが、Blender等でキャッチーな3D図を作成することは、研究者にとって重要なスキルと言えます。

ただし、Blenderは本格的な3Dモデリングソフトウェアであり、さらに教材（動画）のほとんどが英語で作成されているため、日本人にとっては利用の障壁が高く、学習曲線も急で、初心者には難しく感じられることもあります。また、企業で（大学でも）内部資料のために洗練された綺麗な図を作ることは、生産性を著しく低下させるので避けるべきです。

以下は、私が2〜3日で学習して覚えたことを、備忘録としてまとめたものです。

---

## 1. 初期設定
### インストールと設定

まず、Blender 4.2.xx LTSをダウンロードし、アプリケーション（Applications）フォルダに保存します。アプリケーションファイルの名前をBlender4.2.10LTSなどに変更しておけば、複数のバージョンを併存させて管理できます（2025年8月12日現在、4.5.1 LTSが最新です）。Blenderを起動したら、必要なアドオンをインストールします。結晶構造を読み込むには、wrlファイルを読み込むためのアドオンが必要です（[参考](https://aobeco.com/blender-3dcg/)）。

---
## 2. 基本操作（Mac）

Macでの基本的なキー操作とマウス操作は次の通りです。
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

ここでは、電極と固体電解質からなる複合電極のモデリングや、固体電解質の粒界のモデリングに有効な手法をいくつかまとめます。

まず、編集したいオブジェクトを選択して上部のGeometry nodeをクリックすると、ジオメトリノードエディタが開きます。

解像度を低くするほど丸みを帯びた粒子を、高くするほど角張った粒子を表現できます。高解像度の場合は表面の段差が目立つので、スムーズシェードで後処理するとよいでしょう。

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

#### 3.4. 複合電極 + 空隙 (Voronoi/端との距離を2つ重ねて描画)

色々試しましたが、結局これが簡単で良い結果になりました。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/powder_composite4.jpg" alt="ed">
    <p>Voronoiノードの二重描画</p>
  </div>
</div>


#### 3.5. 複合電極 ノイズテクスチャ

粒子の表面に、ノイズテクスチャでディスプレイスメント（変位）変形を加えます。
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

そのため、テクスチャはややラフ（粗め）にする方が良い結果になります。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/particle_surface.jpg" alt="ed">
    <p>ノイズテクスチャ　密度を低く</p>
  </div>
</div>


#### 3.6. 複合電極 画像テクスチャ

#### 3.6.1. 事前に用意した画像テクスチャで表面のざらつきを表現

粒子の表面に、岩やアスファルトの画像をテクスチャとして貼り付けます。前処理として、UV球を作成し、Tabキーで編集モードに入ってから右クリックで「細分化」を選択し、左下の細分化パネルで分割数を50〜100に設定します。後処理としては、下地を光沢BSDF（灰色、粗さ0.3）とし、ライトはサンの強さを20にします。
<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/texture.jpg" alt="ed">
    <p>パーティクルへの画像テクスチャ</p>
  </div>
</div>

#### 3.6.2. 複合電極に画像テクスチャを適用

複合電極に画像テクスチャを適用すると、ディスプレイスメントがうまく機能しないという問題があります（原因はまだ分かっていません）。

#### 3.6.3. 派生：立体的なエネルギーランドスケープ

ポテンシャルのヒートマップ画像を平面にテクスチャとして貼り付けると、立体的なエネルギーランドスケープを描けます。手順は以下の通りです。

1. 前処理1：平面を追加し、Tabキーで編集モードに入って右クリックで「細分化」を選び、左下の細分化パネルで分割数を100にします
2. 前処理2：VESTAでポテンシャルのヒートマップを作成します（以下の例では、BVELの二次元スライスをRGBとグレースケールでそれぞれスクリーンショットしました）
3. 平面にディスプレイスメントをかけ、テクスチャとしてグレースケール画像を選択します
4. ディスプレイスメントの強さを調整し、「適用」からボリューム化して形状を確定させます
5. シェーダーノードでRGB画像をテクスチャとして適用し、Z軸方向にアルファ値を適用します
6. 後処理1：後述する原子の軌跡を作成します
7. 後処理2：背景やライトを調整し、コンポジターノードで光彩の比率を調整します

<div class="center-large-photo-container">
  <div class="center-large-photo-panel">
    <img src="/blender/potential_procedure.jpg" alt="ed">
    <p>手順 VESTA ~ Blender</p>
  </div>
</div>

最終的に作成した画像を以下に示します。
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

1. 上部のタブから**Compositingを開きます**
2. 上部のチェックボックス（**ノードを追加**）を有効にします
3. 何も無いところで右クリックし、追加 → フィルター → グレアを選びます
4. グレアノードを、レンダーレイヤーノードとコンポジットノードの間に配置します
5. 種類を「光の筋」からブルームに変更し、**ミックスを-0.7程度に設定します**
6. 右上のレンダーを押し、ビューポートシェーディング（▽マーク）からコンポジターを「常時」に設定します
7. マテリアルの放射（Emission）のカラーと強さ（1〜3程度）を設定します

> **注記**: ミックスは-1で元画像のみ、0で50/50、1で処理済み画像のみになるので、比率を変えながら光彩の強さを調整します。

</div>
<div class="large-photo-panel">
<img src="/blender/compositing.png" alt="Compositingノード設定画面">
<p style="text-align: center;">設定画面</p>
</div>
</div>


---

## 4. その他リンク・リソース

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

```bash
/Applications/Blender4.2.10LTS.app/Contents/Resources/4.2/python/bin/python3.11 -m pip install scipy
```
