# TSUBAME計算メモ

## VASP5.4.4がTSUBAME4でコンパイルできない

最新のintel oneAPIにはiccが入っていないため、5.4.4のmake.includeのファイルが使えません。20年ほど使われていたiccがicxに変わったようです。公式ドキュメントを見ましたが、icx用のmake.includeも見当たりませんでした。仕方がないので、VASP6へ移行することとしました。

## VASP6のコンパイル

VASP関連ファイルの場所は /gs/bs/tga-kanno-lab002/vasp6/POT_PAW_PBE_64 です。コンパイラとしては、aocc（AMD CPU向け）、nvhpc（GPU向け）、intel（デフォルト？ただしhpc kitは利用不可）を検討しました。そのほかの選択肢として、aocc_ompi_aocl、aocc_ompi_aocl_omp、nvhpc、nvhpc_acc、nvhpc_omp、nvhpc_omp_accがあります。

## TSUBAMEへのアクセス手順

#### TSUBAMEアカウントの作成とログイン

1. TSUBAME 4.0のアカウントを作成し、ユーザーIDをMatsuiに送ってください。Matsuiがkanno-groupに招待しますので、招待を承認してください。
2. 秘密鍵を作成し（ssh-keygen）、catコマンドの出力をコピーして、TSUBAME4ポータルに公開鍵として登録します。

```bash
cd # move to home dir
ssh-keygen # make secret key
cat .ssh/id_rsa.pub # print the public key
```

3. TSUBAME4にログインします。

```bash
ssh <yourID>@login.t4.gsic.titech.ac.jp -o ServerAliveInterval=180
```

**ポイントの確認**は、次のコマンドで行えます。

```bash
t4-user-info group point -g tga-xxxxxx
```

**ジョブの投入**は、次のように行います。

```bash
# submit job file
qsub -g tga-kxxxxxx job.sh
# interactive job
qrsh -g tga-xxxxxx l cpu_16=1 -l h_rt=01:00:00
qrsh -g tga-xxxxxx -l node_o=1 -l h_rt=01:00:00 -p -3
qrsh -V -g xxxxxx -l node_f=1 -l h_rt=01:00:00 -ar 425
qrsh -g tga-xxxxxx -l node_f=1 -l h_rt=02:00:00 -ar 585
qrsh -g tga-xxxxxx -l node_h=1 -l h_rt=01:00:00 -p -3
```

**ノード予約**については、前提知識として、CPUやGPUの数を個別に指定することはできず、192 CPU + 4 GPUを含む1ノード単位で予約する必要があります。ノード予約の上限については https://www.t4.cii.isct.ac.jp/resource-limit を参照してください。予約時刻の24時間前までであれば低コストで予約できます。逆に、24時間を切ってからの予約は非常に高額になるため避けてください。現在の予約状況は、ログインノードで次のコマンドを実行することで確認できます。

```bash
t4-user-info compute ars
```

**Jupyter**を使用する場合の手順は次の通りです。

1. ターミナル1で、tsubame上でserverを立ち上げます

```bash
eval "$(/apps/t4/rhel9/free/miniconda/24.1.2/bin/conda shell.bash hook)"
conda activate mace #any enviroment is accetable if jupyter is installed
module load jupyterrun
jupyterrun -V -g tga-xxx-xxxx -l cpu_40=1 -l h_rt=04:00:00
jupyterrun -V -g tga-xxx-xxx -l node_f=1 -l h_rt=04:00:00 -ar 585 # for researved node
```

2. 別のターミナル2を開いて、ターミナル1に出力されたコードを入力します

```bash
#for example
ssh -l your-id -L 8888:r23n7:12591 login.t4.gsic.titech.ac.jp
```

3. ブラウザで http://localhost:8888/ を開きます
4. ターミナル1の下の方の「Or copy and paste ...」のtoken=以降をコピーして、ブラウザのtokenに入力します

---

## tsubame node

TSUBAME4で利用できる資源タイプは次の通りです。

| 資源タイプ | 使用物理CPUコア数 | メモリ (GB) | GPU 数 | ローカルスクラッチ領域 (GB) |
|----------|----------------|------------|---------|--------------------------|
| node_f   | 192           | 768        | 4       | 1920                    |
| node_h   | 96            | 384        | 2       | 960                     |
| node_q   | 48            | 192        | 1       | 480                     |
| node_o   | 24            | 96         | 1/2     | 240                     |
| gpu_1    | 8             | 96         | 1       | 240                     |
| gpu_h    | 4             | 48         | 1/2     | 120                     |
| cpu_160  | 160           | 368        | 0       | 960                     |
| cpu_80   | 80            | 184        | 0       | 480                     |
| cpu_40   | 40            | 92         | 0       | 240                     |
| cpu_16   | 16            | 36.8       | 0       | 96                      |
| cpu_8    | 8             | 18.4       | 0       | 48                      |
| cpu_4    | 4             | 9.2        | 0       | 24                      |
