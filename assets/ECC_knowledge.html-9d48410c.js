const t=JSON.parse('{"key":"v-37c62cbb","path":"/zh/posts/banana/ECC_knowledge.html","title":"","lang":"zh-CN","frontmatter":{"description":"设 q 是素数或素数的整数次幂，𝑓𝑓(𝑥𝑥)是多项式环𝐹𝐹𝑞𝑞[𝑥𝑥]上的一个 m 次不可约多 项式，商环𝐹𝐹𝑞𝑞[𝑥𝑥]/(𝑓𝑓(𝑥𝑥))是含有𝑞𝑞𝑚𝑚个元素的有限域𝐹𝐹𝑞𝑞𝑚𝑚，称为𝐹𝐹𝑞𝑞的扩域，相应的称 𝐹𝐹𝑞𝑞是𝐹𝐹𝑞𝑞𝑚𝑚的子域，称 m 为扩张次数，𝐹𝐹𝑞𝑞𝑚𝑚可以理解为基础域的 m 维向量空间。扩 域𝐹𝐹𝑞𝑞𝑚𝑚的每个元素唯一表示为𝛼𝛼0𝛽𝛽0 + 𝛼𝛼1𝛽𝛽1 + ⋯ + 𝛼𝛼𝑚𝑚−1𝛽𝛽𝑚𝑚−1，其中𝛼𝛼𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞𝑚𝑚, 而 𝛽𝛽0, 𝛽𝛽1, ⋯ , 𝛽𝛽𝑚𝑚−1为向量空间𝐹𝐹𝑞𝑞𝑚𝑚在𝐹𝐹𝑞𝑞上的一组基。扩域中的元素均由多项式基表示， 且不可约多项式𝑓𝑓(𝑥𝑥)由首一多项式𝑓𝑓(𝑥𝑥) = 𝑥𝑥𝑚𝑚 + 𝑓𝑓𝑚𝑚−1𝑥𝑥𝑚𝑚−1 + ⋯ + 𝑓𝑓2𝑥𝑥2 + 𝑓𝑓1𝑥𝑥 + 𝑓𝑓0，其中𝑓𝑓𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞, 𝑖𝑖 ∈ [0, 𝑚𝑚 − 1]表示。多项式集合{𝑥𝑥𝑚𝑚−1, 𝑥𝑥𝑚𝑚−2, ⋯ , 𝑥𝑥, 1}是𝐹𝐹𝑞𝑞𝑚𝑚在𝐹𝐹𝑞𝑞上 的一组基，称为多项式基。域 𝐹𝐹𝑞𝑞𝑚𝑚 上的任意一个元素 𝑎𝑎(𝑥𝑥) = 𝑎𝑎𝑚𝑚−1𝑥𝑥𝑚𝑚−1 + 𝑎𝑎𝑚𝑚−2𝑥𝑥𝑚𝑚−2 + ⋯ + 𝑎𝑎1𝑥𝑥 + 𝑎𝑎0 在基础域 𝐹𝐹𝑞𝑞 上的系数构成了 m 维向量 𝑎𝑎 = (𝑎𝑎𝑚𝑚−1, 𝑎𝑎𝑚𝑚−2, ⋯ , 𝑎𝑎1, 𝑎𝑎0)其中𝑎𝑎𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞, 𝑖𝑖 ∈ [0, 𝑚𝑚 − 1]","head":[["meta",{"property":"og:url","content":"https://haocat.github.io/zh/posts/banana/ECC_knowledge.html"}],["meta",{"property":"og:site_name","content":"Haocat的博客"}],["meta",{"property":"og:description","content":"设 q 是素数或素数的整数次幂，𝑓𝑓(𝑥𝑥)是多项式环𝐹𝐹𝑞𝑞[𝑥𝑥]上的一个 m 次不可约多 项式，商环𝐹𝐹𝑞𝑞[𝑥𝑥]/(𝑓𝑓(𝑥𝑥))是含有𝑞𝑞𝑚𝑚个元素的有限域𝐹𝐹𝑞𝑞𝑚𝑚，称为𝐹𝐹𝑞𝑞的扩域，相应的称 𝐹𝐹𝑞𝑞是𝐹𝐹𝑞𝑞𝑚𝑚的子域，称 m 为扩张次数，𝐹𝐹𝑞𝑞𝑚𝑚可以理解为基础域的 m 维向量空间。扩 域𝐹𝐹𝑞𝑞𝑚𝑚的每个元素唯一表示为𝛼𝛼0𝛽𝛽0 + 𝛼𝛼1𝛽𝛽1 + ⋯ + 𝛼𝛼𝑚𝑚−1𝛽𝛽𝑚𝑚−1，其中𝛼𝛼𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞𝑚𝑚, 而 𝛽𝛽0, 𝛽𝛽1, ⋯ , 𝛽𝛽𝑚𝑚−1为向量空间𝐹𝐹𝑞𝑞𝑚𝑚在𝐹𝐹𝑞𝑞上的一组基。扩域中的元素均由多项式基表示， 且不可约多项式𝑓𝑓(𝑥𝑥)由首一多项式𝑓𝑓(𝑥𝑥) = 𝑥𝑥𝑚𝑚 + 𝑓𝑓𝑚𝑚−1𝑥𝑥𝑚𝑚−1 + ⋯ + 𝑓𝑓2𝑥𝑥2 + 𝑓𝑓1𝑥𝑥 + 𝑓𝑓0，其中𝑓𝑓𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞, 𝑖𝑖 ∈ [0, 𝑚𝑚 − 1]表示。多项式集合{𝑥𝑥𝑚𝑚−1, 𝑥𝑥𝑚𝑚−2, ⋯ , 𝑥𝑥, 1}是𝐹𝐹𝑞𝑞𝑚𝑚在𝐹𝐹𝑞𝑞上 的一组基，称为多项式基。域 𝐹𝐹𝑞𝑞𝑚𝑚 上的任意一个元素 𝑎𝑎(𝑥𝑥) = 𝑎𝑎𝑚𝑚−1𝑥𝑥𝑚𝑚−1 + 𝑎𝑎𝑚𝑚−2𝑥𝑥𝑚𝑚−2 + ⋯ + 𝑎𝑎1𝑥𝑥 + 𝑎𝑎0 在基础域 𝐹𝐹𝑞𝑞 上的系数构成了 m 维向量 𝑎𝑎 = (𝑎𝑎𝑚𝑚−1, 𝑎𝑎𝑚𝑚−2, ⋯ , 𝑎𝑎1, 𝑎𝑎0)其中𝑎𝑎𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞, 𝑖𝑖 ∈ [0, 𝑚𝑚 − 1]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-07T08:35:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-07T08:35:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-07T08:35:52.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1675758952000,"updatedTime":1675758952000,"contributors":[{"name":"haocat","email":"haoliangwu1999@outlook.com","commits":1}]},"readingTime":{"minutes":0.72,"words":217},"filePathRelative":"zh/posts/banana/ECC_knowledge.md","localizedDate":"2023年2月7日","excerpt":"<h1> </h1>\\n<p>设 q 是素数或素数的整数次幂，𝑓𝑓(𝑥𝑥)是多项式环𝐹𝐹𝑞𝑞[𝑥𝑥]上的一个 m 次不可约多 项式，商环𝐹𝐹𝑞𝑞[𝑥𝑥]/(𝑓𝑓(𝑥𝑥))是含有𝑞𝑞𝑚𝑚个元素的有限域𝐹𝐹𝑞𝑞𝑚𝑚，称为𝐹𝐹𝑞𝑞的扩域，相应的称 𝐹𝐹𝑞𝑞是𝐹𝐹𝑞𝑞𝑚𝑚的子域，称 m 为扩张次数，𝐹𝐹𝑞𝑞𝑚𝑚可以理解为基础域的 m 维向量空间。扩 域𝐹𝐹𝑞𝑞𝑚𝑚的每个元素唯一表示为𝛼𝛼0𝛽𝛽0 + 𝛼𝛼1𝛽𝛽1 + ⋯ + 𝛼𝛼𝑚𝑚−1𝛽𝛽𝑚𝑚−1，其中𝛼𝛼𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞𝑚𝑚, 而 𝛽𝛽0, 𝛽𝛽1, ⋯ , 𝛽𝛽𝑚𝑚−1为向量空间𝐹𝐹𝑞𝑞𝑚𝑚在𝐹𝐹𝑞𝑞上的一组基。扩域中的元素均由多项式基表示， 且不可约多项式𝑓𝑓(𝑥𝑥)由首一多项式𝑓𝑓(𝑥𝑥) = 𝑥𝑥𝑚𝑚 + 𝑓𝑓𝑚𝑚−1𝑥𝑥𝑚𝑚−1 + ⋯ + 𝑓𝑓2𝑥𝑥2 + 𝑓𝑓1𝑥𝑥 + 𝑓𝑓0，其中𝑓𝑓𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞, 𝑖𝑖 ∈ [0, 𝑚𝑚 − 1]表示。多项式集合{𝑥𝑥𝑚𝑚−1, 𝑥𝑥𝑚𝑚−2, ⋯ , 𝑥𝑥, 1}是𝐹𝐹𝑞𝑞𝑚𝑚在𝐹𝐹𝑞𝑞上 的一组基，称为多项式基。域 𝐹𝐹𝑞𝑞𝑚𝑚 上的任意一个元素 𝑎𝑎(𝑥𝑥) = 𝑎𝑎𝑚𝑚−1𝑥𝑥𝑚𝑚−1 + 𝑎𝑎𝑚𝑚−2𝑥𝑥𝑚𝑚−2 + ⋯ + 𝑎𝑎1𝑥𝑥 + 𝑎𝑎0 在基础域 𝐹𝐹𝑞𝑞 上的系数构成了 m 维向量 𝑎𝑎 = (𝑎𝑎𝑚𝑚−1, 𝑎𝑎𝑚𝑚−2, ⋯ , 𝑎𝑎1, 𝑎𝑎0)其中𝑎𝑎𝑖𝑖 ∈ 𝐹𝐹𝑞𝑞, 𝑖𝑖 ∈ [0, 𝑚𝑚 − 1]</p>","autoDesc":true}');export{t as data};
