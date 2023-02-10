---
icon: edit
date: 2022-01-08
category:
  - 安全芯片
tag:
  - 对称加密
  - 填充
  - 国际
---
# AES DES

## 填充策略
PKCS7是当下各大加密算法都遵循的填充算法，且 OpenSSL 加密算法默认填充算法就是 PKCS7。PKCS7Padding的填充方式为当数据长度不足数据块长度时,缺几位补几个几,eg.对于AES128算法其数据块为16Byte（数据长度需要为16Byte的倍数）,如果数据为”00112233445566778899AA”一共11个Byte,缺了5位,采用PKCS7Padding方式填充之后的数据为“00112233445566778899AA0505050505”。
特别注意的一点是如果是数据刚好满足数据块长度也要在元数据后在按PKCS7规则填充一个数据块数据，这样做的目的是为了区分有效数据和补齐数据。仍以AES128为例：如果数据为”00112233445566778899AABBCCDDEEFF”一共16个符合数据块规则采用PKCS7Padding方式填充之后的数据为
“00112233445566778899AABBCCDDEEFF10101010101010101010101010101010”

## DES
DES算法是一种用64位(8位用于校验,第8、16、24、32、40、48、56、64 等8位是校验位， 使得每个密钥都有奇数个1)密钥来加密分组长度为64位数据的对称密钥算法

3DES（即Triple DES）是DES向AES过渡的加密算法，它使用3条56位的密钥对数据进行三次加密。是DES的一个更安全的变形。它以DES为基本模块，通过组合分组方法设计出分组加密算法。比起最初的DES，3DES更为安全。

### 加密算法流程
（1）明文初始置换----》（2）密钥初始置换---》（3）生成16个48位的子密钥----》（4）明文拓展置换---》（5）S盒替换---》（6）P盒替换---》（7）末置换
![20220916143648](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916143648.png)
#### 明文进行初始置换IP
输入的64位比特倍打乱重排,分为长32位的L0,R0两部分


![20220919114600](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919114600.png "初始变换IP")
　设转换前的数据位D1D2D3…D64，则IP置换后的结果为L0=D58D50…D8，R0=D57D49…D7
#### N*16轮feistle结构轮换
第i轮输入分成左右两部分$L_{i-1}$和$R_{i-1}$,做以下运算得到本轮输出的两部分
- $L_i=R_{i-1}$
- $R_i=L_{i-1} \oplus F(R_{i-1},k_i)$
PS : $\oplus$ 异或,$k_i$第i轮的轮密钥
  
##### 轮函数F
函数 F 是 DES 的核心运算函数，包含 4 步运算：扩展置换函数 E、与子密钥异或、S 盒替换和置换函数 
![20220916142640](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916142640.png)
###### 扩展置换
![20220916142733](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916142733.png)
选择扩展置换：F函数的输入是上一轮的右边和轮函数，由于上一轮的右边为32bit，而轮函数是48bit，所以需要对上一轮的右边进行扩展，从32bit扩展到48bit。方法是将32bit写成8*4的矩阵，然后增加两列，也就是增加16bit，增加两列的内容按照位置下标与相应位置的内容相同。
###### 压缩运算S盒

![20220916143029](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916143029.png)
![20220916143044](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916143044.png)
![20220916143117](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916143117.png)
压缩替代S盒：在经过选择扩展置换之后，将得到48bit信息与48bit轮密钥进行异或。异或后的信息作为S盒的输入。将输入的48bit分成8组，每组6bit，然后每组的输出为4bit。根据分组号选择相应的S盒，将6bit中的第一个比特位和第六个比特位作为行号，中间4个比特位作为列号，选择一个16进制数字，然后将输入的6bit数字替换成S盒中的4bit数字（一个十六进制数字）。
###### 置换运算P盒
![20220916143514](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916143514.png)

##### 子密钥生成
![20220916155946](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916155946.png)

#### 末置换$IP^{-1}$
　末置换IP-1是DES加密过程的最后一步，它的作用打乱重排第十六次加密迭代的结果然后形成64位密文，是初始置换IP的逆置换，到了这一步，DES的加密过程就结束了。其置换矩阵如图2-11所示。
将$L_{16}$和$R_{16}$作为末置换的输入
![20220919114515](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919114515.png "末置换IP-1")
### 解密算法
![20220916160654](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220916160654.png)
> 对加密的算法的反变换即可
> - $L_i=R_{i-1}$ 
> - $R_i=L_{i-1} \oplus F(R_{i-1},k_i)$
得到解密算法
- $R_{i-1}=L_{i}$ 
- $L_{i-1}=R_{i} \oplus F(L_{i},k_i)$ $\ \ \ (i=16,15...1)$
PS : $\oplus$ 异或,$k_i$第i轮的轮密钥
### 资源消耗 
48比特异或 ，循环移位  S盒 P盒

## Triple-DES
DES使用“密钥包”，其包含3个DES密钥，K1，K2和K3，均为56位（除去奇偶校验位）。加密算法为：

密文 = EK3(DK2(EK1(明文)))
也就是说，使用K1为密钥进行DES加密，再用K2为密钥进行DES“解密”，最后以K3进行DES加密。

而解密则为其反过程：

明文 = DK1(EK2(DK3(密文)))
即以K3解密，以K2“加密”，最后以K1解密。

每次加密操作都只处理64位数据，称为一块。

无论是加密还是解密，中间一步都是前后两步的逆。这种做法提高了使用密钥选项2时的算法强度，并在使用密钥选项3时与DES兼容。

## AES
AES通过密钥来加密、解密信息，并且加密和解密过程使用的密钥完全相同，加密过程和解密过程具有一定的对称性，因此AES属于密码学中的对称密钥算法(symmetric-key algorithm)。AES支持三种密钥大小(key size)：128 bits、192 bits和256 bits，轮数分别为10、12和14。一般认为其加密强度随密钥长度的增大而增大。

AES的内部结构由多个层(Layer)构成，每一层都是对整个处理块16字节(128bits)的操作，并且循环多轮进行处理。如下图所示，加密过程中，AES使用了四种不同类型的层：密钥加法层(Key Addition Layer)、字节代换层(Byte Substitution Layer)、ShiftRows层(行位移)和MixColumn层(列混合)
![20220919122346](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919122346.png)
### AES加密算法流程
![20220919122224](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919122224.png)

AES定义在二元扩域$GF(2^8)$上，加法就是按比特异或，乘法就是相乘之后除以一个不可约多项式的余子式

#### 密钥加法
在密钥加法层中有两个输入的参数，分别是明文和子密钥k[0]，而且这两个输入都是128位的。k[0]实际上就等同于密钥k；只需要将两个输入的数据进行按字节异或操作就会得到运算的结果。
![20220919122718](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919122718.png)

#### 字节代换
字节代换层的主要功能就是让输入的数据通过S_box表完成从一个字节到另一个字节的映射，这里的S_box表是通过某种方法计算出来的，具体的计算方法将在进阶部分进行介绍，我们基础部分就只给出计算好的S_box结果。S_box表是一个拥有256个字节元素的数组，可以将其定义为一维数组，也可以将其定义为16·16的二维数组，如果将其定义为二维数组，读取S_box数据的方法就是要将输入数据的每个字节的高四位作为第一个下标，第四位作为第二个下标，略有点麻烦。这里建议将其视作一维数组即可。逆S盒与S盒对应，用于解密时对数据处理，我们对解密时的程序处理称作逆字节代换，只是使用的代换表盒加密时不同而已。
![20220919122831](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919122831.png "S盒")

![20220919122916](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919122916.png "逆S盒")

![20220919122937](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919122937.png "加密图示")


```S盒生成的数学知识```

#### 行位移
行位移操作最为简单，它是用来将输入数据作为一个4·4的字节矩阵进行处理的，然后将这个矩阵的字节进行位置上的置换。ShiftRows子层属于AES手动的扩散层，目的是将单个位上的变换扩散到影响整个状态当，从而达到雪崩效应。在加密时行位移处理与解密时的处理相反，我们这里将解密时的处理称作逆行位移。它之所以称作行位移，是因为它只在4·4矩阵的行间进行操作，每行4字节的数据。在加密时，保持矩阵的第一行不变，第二行向左移动8Bit(一个字节)、第三行向左移动2个字节、第四行向左移动3个字节。而在解密时恰恰相反，依然保持第一行不变，将第二行向右移动一个字节、第三行右移2个字节、第四行右移3个字节。操作结束！
![正向行位移](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919143042.png "正向行位移")

![逆向行位移](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919143105.png "逆向行位移")

#### 列混淆
列混淆子层是AES算法中最为复杂的部分，属于扩散层，列混淆操作是AES算法中主要的扩散元素，它混淆了输入矩阵的每一列，使输入的每个字节都会影响到4个输出字节。行位移子层和列混淆子层的组合使得经过三轮处理以后，矩阵的每个字节都依赖于16个明文字节成可能。其中包含了矩阵乘法、伽罗瓦域内加法和乘法的相关知识。

在加密的正向列混淆中，我们要将输入的4·4矩阵左乘一个给定的4·4矩阵。而它们之间的加法、乘法都在扩展域$GF(2^8)$中进行，所以也就可以将这一个步骤分成两个部分进行讲解：
AES算法使用的不可约多项式为$P(x)=x^8+x^4+x^3+x^1+1$
$$
% \begin{bmatrix}
%    1 & 2 & 3 \\
%    4 & 5 & 6 \\
%    7 & 8 & 9
%   \end{bmatrix} 
%   =
   \begin{bmatrix}
   02 & 02 & 01 & 01 \\
   01 & 02 & 03 & 01\\
   01  & 01 & 02 & 03\\
    03  & 01 & 01 & 02
  \end{bmatrix} 
  \times 
  \begin{bmatrix}
   p1 & p5 & p9 & p13 \\
   p2 & p6 & p10 & p14\\
   p1  & p7 & p11 & p15\\
    p4  & p8 & p12 & p16
  \end{bmatrix} 
$$

```C++
1 ///////////////////////////////////////////////////////////////
 2 //功能:   伽罗瓦域内的乘法运算  GF(128)
 3 //参数:   Num_L           输入的左参数
 4 //      Num_R           输入的右参数
 5 //返回值:计算结果
 6 char GaloisMultiplication(unsigned char Num_L, unsigned char Num_R)
 7 {
 8     //定义变量
 9     unsigned char Result = 0;       //伽罗瓦域内乘法计算的结果
10  
11     while (Num_L)
12     {
13         //如果Num_L最低位是1就异或Num_R，相当于加上Num_R * 1
14         if (Num_L & 0x01)
15         {
16             Result ^= Num_R;
17         }
18  
19         //Num_L右移一位，相当于除以2
20         Num_L = Num_L >> 1;
21  
22         //如果Num_R最高位为1
23         if (Num_R & 0x80)
24         {
25             //左移一位相当于乘二
26             Num_R = Num_R << 1;     //注：这里会丢失最高位，但是不用担心
27  
28             Num_R ^= 0x1B;  //计算伽罗瓦域内除法Num_R = Num_R / (x^8(刚好丢失最高位) + x^4 + x^3 + x^1 + 1)
29         }
30         else
31         {
32             //左移一位相当于乘二
33             Num_R = Num_R << 1;
34         }
35     }
36     return Result;
37 }

相关代码
```
![20220919144201](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919144201.png  "正向列混淆")

![20220919144232](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919144232.png "逆向列混淆")

#### 子密钥生成
子密钥的生成是以列为单位进行的，一列是32Bit，四列组成子密钥共128Bit。生成子密钥的数量比AES算法的轮数多一个，因为第一个密钥加法层进行密钥漂白时也需要子密钥。密钥漂白是指在AES的输入盒输出中都使用的子密钥的XOR加法。子密钥在图中都存储在W[0]、W[1]、...、W[43]的扩展密钥数组之中。k1-k16表示原始密钥对应的字节，而图中子密钥k0与原始子密钥相同。在生成的扩展密钥中W的下标如果是4的倍数时(从零开始)需要对异或的参数进行G函数处理。扩展密钥生成有关公式如下
1<= i <= 10
1<= j <= 3
w[4i] = W[4(i-1)] + G(W[4i-1]);
w[4i+j] = W[4(i-1)+j] + W[4i-1+j];
![20220919160327](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919160327.png)
函数G()首先将4个输入字节进行翻转，并执行一个按字节的S盒代换，最后用第一个字节与轮系数Rcon进行异或运算。轮系数是一个有10个元素的一维数组，一个元素1个字节。G()函数存在的目的有两个，一是增加密钥编排中的非线性；二是消除AES中的对称性。这两种属性都是抵抗某些分组密码攻击必要的。
``` C
const word Rcon[16] =
{
    0x00, 0x01, 0x02, 0x04,
    0x08, 0x10, 0x20 0x40,
    0x80, 0x1b, 0x36, 0x6c,
    0xd8, 0xab, 0xed, 0x9a
    };
```


![20220919160040](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220919160040.png "密钥扩展过程")

当i是4的倍数时 要计算Wi，需要先将Wi-1进行左移1个字节（向上移动表示左移）的操作、然后用给定的sBox替换（字节代换），进行sBox替换的时候需要将被替换的字节按照高4位做x坐标，低4位做y坐标在sBox中找到替换到的字节表示。最后再将得到的字节序列与Wi-4和轮常数（轮常数是通过右边的方法计算得到的）进行异或得到Wi的字节序列。当i不是4的倍数时，Wi就是Wi-1和Wi-4的异或结果。重复计算40次得到其余10轮的轮密钥，构成11轮的轮密钥。


### AES解密算法流程
![20220920113201](https://test1.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220920113201.png)


### AES中S盒的生成过程
AES中的S盒是可以通过显式公式推算出来的（DES中的S盒未公布生成原理）,DES的S盒具有非常强的代数结构，它是经过两个步骤计算而来的

- 计算$GF(2^8)$上的逆元
- 仿射映射


### AES资源消耗
逻辑运算 异或
列混淆中的$GF(2^8)$的矩阵乘法  加法


### AES S-BOX 改进
$$y=M \cdot x^{-1} +e\\x=(M^{-1 }(y+c))^{-1} $$