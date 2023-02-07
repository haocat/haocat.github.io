const e=JSON.parse('{"key":"v-6cbeafbd","path":"/zh/posts/banana/AES_DES.html","title":"AES DES","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-08T00:00:00.000Z","category":["安全芯片"],"tag":["对称加密","填充","国际"],"description":"AES DES 填充策略 PKCS7是当下各大加密算法都遵循的填充算法，且 OpenSSL 加密算法默认填充算法就是 PKCS7。PKCS7Padding的填充方式为当数据长度不足数据块长度时,缺几位补几个几,eg.对于AES128算法其数据块为16Byte（数据长度需要为16Byte的倍数）,如果数据为”00112233445566778899AA”一共11个Byte,缺了5位,采用PKCS7Padding方式填充之后的数据为“00112233445566778899AA0505050505”。 特别注意的一点是如果是数据刚好满足数据块长度也要在元数据后在按PKCS7规则填充一个数据块数据，这样做的目的是为了区分有效数据和补齐数据。仍以AES128为例：如果数据为”00112233445566778899AABBCCDDEEFF”一共16个符合数据块规则采用PKCS7Padding方式填充之后的数据为 “00112233445566778899AABBCCDDEEFF10101010101010101010101010101010”","head":[["meta",{"property":"og:url","content":"https://haocat.github.io/zh/posts/banana/AES_DES.html"}],["meta",{"property":"og:site_name","content":"Haocat的博客"}],["meta",{"property":"og:title","content":"AES DES"}],["meta",{"property":"og:description","content":"AES DES 填充策略 PKCS7是当下各大加密算法都遵循的填充算法，且 OpenSSL 加密算法默认填充算法就是 PKCS7。PKCS7Padding的填充方式为当数据长度不足数据块长度时,缺几位补几个几,eg.对于AES128算法其数据块为16Byte（数据长度需要为16Byte的倍数）,如果数据为”00112233445566778899AA”一共11个Byte,缺了5位,采用PKCS7Padding方式填充之后的数据为“00112233445566778899AA0505050505”。 特别注意的一点是如果是数据刚好满足数据块长度也要在元数据后在按PKCS7规则填充一个数据块数据，这样做的目的是为了区分有效数据和补齐数据。仍以AES128为例：如果数据为”00112233445566778899AABBCCDDEEFF”一共16个符合数据块规则采用PKCS7Padding方式填充之后的数据为 “00112233445566778899AABBCCDDEEFF10101010101010101010101010101010”"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-07T08:35:52.000Z"}],["meta",{"property":"article:tag","content":"对称加密"}],["meta",{"property":"article:tag","content":"填充"}],["meta",{"property":"article:tag","content":"国际"}],["meta",{"property":"article:published_time","content":"2022-01-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-07T08:35:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AES DES\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-07T08:35:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"填充策略","slug":"填充策略","link":"#填充策略","children":[]},{"level":2,"title":"DES","slug":"des","link":"#des","children":[{"level":3,"title":"加密算法流程","slug":"加密算法流程","link":"#加密算法流程","children":[]},{"level":3,"title":"解密算法","slug":"解密算法","link":"#解密算法","children":[]},{"level":3,"title":"资源消耗","slug":"资源消耗","link":"#资源消耗","children":[]}]},{"level":2,"title":"Triple-DES","slug":"triple-des","link":"#triple-des","children":[]},{"level":2,"title":"AES","slug":"aes","link":"#aes","children":[{"level":3,"title":"AES加密算法流程","slug":"aes加密算法流程","link":"#aes加密算法流程","children":[]},{"level":3,"title":"AES解密算法流程","slug":"aes解密算法流程","link":"#aes解密算法流程","children":[]},{"level":3,"title":"AES中S盒的生成过程","slug":"aes中s盒的生成过程","link":"#aes中s盒的生成过程","children":[]},{"level":3,"title":"AES资源消耗","slug":"aes资源消耗","link":"#aes资源消耗","children":[]},{"level":3,"title":"AES S-BOX 改进","slug":"aes-s-box-改进","link":"#aes-s-box-改进","children":[]}]}],"git":{"createdTime":1675758952000,"updatedTime":1675758952000,"contributors":[{"name":"haocat","email":"haoliangwu1999@outlook.com","commits":1}]},"readingTime":{"minutes":12.11,"words":3632},"filePathRelative":"zh/posts/banana/AES_DES.md","localizedDate":"2022年1月8日","excerpt":"<h1> AES DES</h1>\\n<h2> 填充策略</h2>\\n<p>PKCS7是当下各大加密算法都遵循的填充算法，且 OpenSSL 加密算法默认填充算法就是 PKCS7。PKCS7Padding的填充方式为当数据长度不足数据块长度时,缺几位补几个几,eg.对于AES128算法其数据块为16Byte（数据长度需要为16Byte的倍数）,如果数据为”00112233445566778899AA”一共11个Byte,缺了5位,采用PKCS7Padding方式填充之后的数据为“00112233445566778899AA0505050505”。\\n特别注意的一点是如果是数据刚好满足数据块长度也要在元数据后在按PKCS7规则填充一个数据块数据，这样做的目的是为了区分有效数据和补齐数据。仍以AES128为例：如果数据为”00112233445566778899AABBCCDDEEFF”一共16个符合数据块规则采用PKCS7Padding方式填充之后的数据为\\n“00112233445566778899AABBCCDDEEFF10101010101010101010101010101010”</p>","autoDesc":true}');export{e as data};