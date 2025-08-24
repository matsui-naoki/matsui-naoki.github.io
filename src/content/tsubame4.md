# TSUBAME計算メモ

## VASP5.4.4がTSUBAME4でコンパイルできない
最新のintel oneAPIにiccが入っていない→5.4.4のmake.includeのファイルが使えない。20年ほど使われていたiccがicxに変わったらしい。公式ドキュメントを見たが、icx用のmake.includeも見当たらない。仕方がなく, VASP6へ移行することとした。

## VASP6のコンパイル 
VASP /gs/bs/tga-kanno-lab002/vasp6/POT_PAW_PBE_64
検討したコンパイラ
・aocc : amd cpu, nvhpc : GPU, intel : default? but hpc kit is not available, その他 : aocc_ompi_aocl aocc_ompi_aocl_omp nvhpc nvhpc_acc nvhpc_omp nvhpc_omp_acc

## TSUBAMEへのアクセス手順
#### make TSUBAME account, and login
1. make tsubame 4.0 account -> send your user ID to Matsui -> Matsui will invite you for kanno-group -> approve the invitation.
2. Make secret key (ssh-keygen) -> copy the outout of cat command and register it as public kye in tsubame4 portal.
${codeBlock}
cd # move to home dir
ssh-keygen # make secret key
cat .ssh/id_rsa.pub # print the public key
${codeBlock}

3. login to tsubame4
${codeBlock}
ssh <yourID>@login.t4.gsic.titech.ac.jp -o ServerAliveInterval=180
${codeBlock}



* check point
${codeBlock}
t4-user-info group point -g tga-xxxxxx
${codeBlock}

* job submit
${codeBlock}
# submit job file
qsub -g tga-kxxxxxx job.sh
# interactive job
qrsh -g tga-xxxxxx l cpu_16=1 -l h_rt=01:00:00
qrsh -g tga-xxxxxx -l node_o=1 -l h_rt=01:00:00 -p -3
qrsh -V -g xxxxxx -l node_f=1 -l h_rt=01:00:00 -ar 425
qrsh -g tga-xxxxxx -l node_f=1 -l h_rt=02:00:00 -ar 585
qrsh -g tga-xxxxxx -l node_h=1 -l h_rt=01:00:00 -p -3
${codeBlock}


* node reservation

** Preliminary knowledge
The number of cpu and gpu cannot be specified, and the reservation must be made in units of 1 node including 192 cpu + 4 gpu.

See https://www.t4.cii.isct.ac.jp/resource-limit for node reservation limits

Reservations can be made at low cost up to 24 hours prior to the reservation time. Conversely, avoid reservations made less than 24 hours in advance, as they are extremely expensive.

The current reservation availability can be checked by executing the following command on the login node: 
${codeBlock}
t4-user-info compute ars
${codeBlock}

* Jupyter
1. ターミナル1でtsubame上でserver立ち上げ
${codeBlock}
eval "$(/apps/t4/rhel9/free/miniconda/24.1.2/bin/conda shell.bash hook)"
conda activate mace #any enviroment is accetable if jupyter is installed
module load jupyterrun
jupyterrun -V -g tga-xxx-xxxx -l cpu_40=1 -l h_rt=04:00:00
jupyterrun -V -g tga-xxx-xxx -l node_f=1 -l h_rt=04:00:00 -ar 585 # for researved node
${codeBlock}

2. 別のターミナル2を開いて、ターミナル1に出力されたコードを入力
${codeBlock}
#for example
ssh -l your-id -L 8888:r23n7:12591 login.t4.gsic.titech.ac.jp
${codeBlock}

3. ブラウザで([http://localhost:8888/]([example/analysis.ipynb]))を開く
4. ターミナル1の下の法の Or copy and paste ... のtoken=以降をコピーしてブラウザのtokenに入力

---
## tsubame node
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