function Kefu(Obj) {
    console.log("");
    var cssStyle=`
            <style>
            @media screen and (min-width:769px){.kefubox{position:fixed;right:10px;z-index:99999;transform:translateY(300px);}.kefubox .main{width:50px;background:#fff;border:1px solid #f2f2f2;box-shadow:0 0 15px #e4e4e4;box-sizing:border-box;}.kefubox .cursor_default{cursor:default;}.kefubox .floor{border-bottom:1px solid #f2f2f2;position:relative;box-sizing:border-box;}.kefubox .floor .home{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586946606115%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221943%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M896%20832H128V490.666667L512%20128l384%20362.666667z%22%20fill%3D%22%23E8EAF6%22%20p-id%3D%221944%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M832%20448l-106.666667-106.666667V192h106.666667zM128%20832h768v106.666667H128z%22%20fill%3D%22%23C5CAE9%22%20p-id%3D%221945%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M512%2091.733333L85.333333%20488.533333l42.666667%2046.933334L512%20179.2l384%20356.266667%2042.666667-46.933334z%22%20fill%3D%22%23B71C1C%22%20p-id%3D%221946%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M384%20597.333333h256v341.333334H384z%22%20fill%3D%22%23D84315%22%20p-id%3D%221947%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M448%20362.666667h128v128h-128z%22%20fill%3D%22%2301579B%22%20p-id%3D%221948%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M586.666667%20757.333333c-6.4%200-10.666667%204.266667-10.666667%2010.666667v42.666667c0%206.4%204.266667%2010.666667%2010.666667%2010.666666s10.666667-4.266667%2010.666666-10.666666v-42.666667c0-6.4-4.266667-10.666667-10.666666-10.666667z%22%20fill%3D%22%23FF8A65%22%20p-id%3D%221949%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}.kefubox .floor .tellink{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947302970%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222086%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M187.6%20245.3l152.9%20152.9-27.9%2027.9c-5.7%205.7-6.3%2014.9-1.2%2021.2l26.5%2033.5c29.9%2037.8%2062.4%2074.3%2096.7%20108.6s70.8%2066.8%20108.6%2096.7l33.5%2026.5c6.4%205%2015.5%204.5%2021.2-1.2l27.9-27.9%20152.9%20152.9-56.2%2056.2c-2.2-1.1-4.3-2.1-6.4-3.2C591.8%20826.6%20478.4%20744.5%20379%20645c-99.4-99.4-181.6-212.8-244.3-337.1-1.1-2.1-2.2-4.3-3.2-6.4l56.1-56.2m0-83.9c-4.1%200-8.2%201.6-11.3%204.7L78%20264.4c-14.4%2014.4-18.2%2036.5-9.3%2054.9%202.9%205.9%205.8%2011.7%208.7%2017.6C141.7%20464.4%20227.1%20584%20333.6%20690.5s226.1%20191.9%20353.6%20256.2c5.8%202.9%2011.7%205.8%2017.6%208.7%206.7%203.2%2013.8%204.8%2020.9%204.8%2012.5%200%2024.8-4.9%2034-14.1l98.3-98.3c6.2-6.2%206.2-16.4%200-22.6l-220.9-221c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2%201.6-11.3%204.7l-21.6%2021.6c-5.8%205.8-15%206.3-21.4%201.1-31.7-25.7-62.3-53.3-91.8-82.7-29.4-29.4-57-60.1-82.7-91.8-5.2-6.4-4.7-15.6%201.1-21.4l21.6-21.6c6.2-6.2%206.2-16.4%200-22.6L199%20166.1c-3.2-3.2-7.3-4.7-11.4-4.7z%22%20fill%3D%22%233E3A39%22%20p-id%3D%222087%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M444.1%20362.5L223.3%20141.7c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.3-16.3%206.3-22.6%200zM882.3%20800.7L661.5%20579.9c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.2-16.4%206.2-22.6%200z%22%20fill%3D%22%23FF6E83%22%20p-id%3D%222088%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}.kefubox .floor .qqlink{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947319072%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222226%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M511.03745067%20986.9408c-85.50293333%200-163.98613333-26.68693333-214.51733334-66.54506667-25.6608%207.1488-58.4864%2018.65493333-79.20213333%2032.9216-17.7248%2012.2016-15.51573333%2024.6464-12.32%2029.6704%2014.02666667%2022.06826667%20240.62186667%2014.09173333%20306.03946667%207.21813334v-3.26506667z%22%20fill%3D%22%23FAAD08%22%20p-id%3D%222227%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M495.62731733%20986.9408c85.5008%200%20163.98613333-26.68693333%20214.51733334-66.54506667%2025.6608%207.1488%2058.48533333%2018.65493333%2079.2032%2032.9216%2017.72373333%2012.2016%2015.51253333%2024.6464%2012.32%2029.6704-14.02666667%2022.06826667-240.62293333%2014.09173333-306.0416%207.21813334v-3.26506667z%22%20fill%3D%22%23FAAD08%22%20p-id%3D%222228%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M496.137184%20472.0256c140.7296-0.9344%20253.5136-27.50186667%20291.73013333-37.696%209.1104-2.432%2013.984-6.78826667%2013.984-6.78826667%200.032-1.25013333%200.57813333-22.3488%200.57813334-33.232C802.42945067%20211.02186667%20713.733984%2026.8512%20495.61665067%2026.83946667%20277.500384%2026.8512%20188.80065067%20211.0208%20188.80065067%20394.30933333c0%2010.8832%200.5504%2031.98186667%200.58346666%2033.232%200%200%203.9648%204.07573333%2011.23093334%206.048%2035.2832%209.57866667%20150.18986667%2037.4816%20294.48533333%2038.43626667h1.0368z%22%20fill%3D%22%23000000%22%20p-id%3D%222229%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M883.50145067%20626.96746667c-8.66133333-27.82506667-20.48426667-60.27306667-32.45546667-91.43466667%200%200-6.8864-0.848-10.36586667%200.15786667-107.424%2031.152-237.62453333%2051.00586667-336.8448%2049.808h-1.02613333C404.14465067%20586.6848%20274.82731733%20567.05813333%20167.76491733%20536.2112%20163.67425067%20535.03466667%20155.59745067%20535.53386667%20155.59745067%20535.53386667%20143.62625067%20566.6944%20131.804384%20599.1424%20123.14411733%20626.96746667%2081.84491733%20759.64586667%2095.22411733%20814.5536%20105.41291733%20815.78453333c21.8624%202.63893333%2085.09866667-99.87946667%2085.09866667-99.87946666%200%20104.17066667%2094.21226667%20264.1248%20309.94773333%20265.59573333a765.87733333%20765.87733333%200%200%201%205.7248%200C721.92171733%20980.02986667%20816.130784%20820.0768%20816.130784%20715.90613333c0%200%2063.23626667%20102.5184%2085.10186667%2099.87946667%2010.18666667-1.23093333%2023.56586667-56.13866667-17.7312-188.81813333%22%20fill%3D%22%23000000%22%20p-id%3D%222230%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M429.20811733%20303.91146667c-29.76%201.32266667-55.19466667-32.11306667-56.78933333-74.61973334-1.6192-42.53546667%2021.18186667-78.08746667%2050.94826667-79.4176%2029.73333333-1.3056%2055.14986667%2032.11626667%2056.76586666%2074.63893334%201.6288%2042.53546667-21.17653333%2078.08-50.9248%2079.3984m220.448-74.61973334c-1.5936%2042.50666667-27.02933333%2075.94026667-56.78933333%2074.61973334-29.7472-1.32053333-52.5536-36.86293333-50.9248-79.39733334%201.61386667-42.52586667%2027.0304-75.94773333%2056.76373333-74.63893333%2029.7696%201.33013333%2052.57066667%2036.88106667%2050.95146667%2079.41653333%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%222231%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M695.40545067%20359.0688c-7.8112-18.78293333-86.46613333-39.7088-183.8432-39.7088h-1.04533334c-97.376%200-176.03306667%2020.92586667-183.84213333%2039.7088a6.66026667%206.66026667%200%200%200-0.57066667%202.672c0%201.3536%200.4192%202.57493333%201.07306667%203.61173333%206.5792%2010.416%2093.92426667%2061.88586667%20183.3408%2061.88586667h1.04533333c89.41546667%200%20176.75733333-51.46666667%20183.33973334-61.88373333a6.77546667%206.77546667%200%200%200%201.0688-3.62133334c0-0.9568-0.21333333-1.85173333-0.5664-2.66453333%22%20fill%3D%22%23FAAD08%22%20p-id%3D%222232%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M464.67371733%20239.33546667c1.344%2016.94506667-7.8688%2032-20.5504%2033.6448-12.7008%201.64693333-24.0736-10.7552-25.42506666-27.70986667-1.32586667-16.95466667%207.87306667-32.00853333%2020.53333333-33.64053333%2012.72213333-1.65226667%2024.11413333%2010.76053333%2025.44213333%2027.7056m77.97013334%208.464c2.70186667-4.39253333%2021.1488-27.488%2059.328-19.0784%2010.02773333%202.208%2014.66666667%205.45706667%2015.64586666%206.73706666%201.44533333%201.888%201.84106667%204.576%200.37546667%208.19626667-2.90346667%207.17333333-8.89386667%206.97813333-12.2176%205.5744-2.144-0.90666667-28.736-16.94826667-53.232%206.98986667-1.68426667%201.648-4.69866667%202.21226667-7.55733333%200.25813333-2.85653333-1.95626667-4.0384-5.9232-2.3424-8.67733333%22%20fill%3D%22%23000000%22%20p-id%3D%222233%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M503.82145067%20589.328h-1.03146667c-67.80586667%200.80213333-150.0224-8.00426667-229.6384-23.38133333-6.81706667%2038.67946667-10.93333333%2087.29386667-7.3984%20145.27573333%208.928%20146.54293333%2097.728%20238.65173333%20234.79253333%20239.99573333H506.11691733c137.06453333-1.344%20225.86453333-93.4528%20234.79466667-239.99573333%203.53493333-57.98613333-0.58346667-106.60053333-7.40266667-145.2832-79.63093333%2015.38453333-161.86133333%2024.19626667-229.68746666%2023.3888%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%222234%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M310.69291733%20581.3504v146.63253333s69.28746667%2013.552%20138.69973334%204.17066667V596.896c-43.97333333-2.4128-91.40053333-7.79093333-138.69973334-15.5456%22%20fill%3D%22%23EB1C26%22%20p-id%3D%222235%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M806.50411733%20427.2384s-130.112%2043.07946667-302.6592%2044.30826667h-1.02613333c-172.26346667-1.22346667-302.21653333-44.16106667-302.66026667-44.30826667l-43.5776%20114.08213333c108.9984%2034.464%20244.0928%2056.67733333%20346.23786667%2055.38773334l1.024-0.00213334c102.15253333%201.29706667%20237.22666667-20.91733333%20346.24-55.3856l-43.57866667-114.08213333z%22%20fill%3D%22%23EB1C26%22%20p-id%3D%222236%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}.kefubox .floor .wechatimg{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947424844%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222236%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M903.36%20780.8a37.888%2037.888%200%200%200%2027.632%209.04%2043.488%2043.488%200%200%200%2026.704-12.64A238.112%20238.112%200%200%200%201024%20618.144c0-133.696-121.6-252.944-277.184-272.816C709.072%20200.784%20552.512%2096%20373.872%2096%20167.6%2096%200%20238.736%200%20413.088a277.648%20277.648%200%200%200%2081.04%20194.224%2037.28%2037.28%200%200%200%2028.544%2011.744%2037.504%2037.504%200%200%200%2027.632-63.232%20206.4%20206.4%200%200%201-60.8-142.736c0-133.696%20132.608-242.096%20296.512-242.096%20131.68%200%20253.232%2072.272%20291.92%20172.544-162.064%2015.36-288.224%20134.608-288.224%20274.624a238.736%20238.736%200%200%200%202.768%2036.128h-6.4a449.824%20449.824%200%200%201-90.24-11.744c-6.4-0.896-12.896-2.704-19.344-3.616a34.128%2034.128%200%200%200-24.864%203.616L121.6%20700.352a37.264%2037.264%200%200%200-17.6%2050.592%2037.952%2037.952%200%200%200%2034.064%2020.8%2060.448%2060.448%200%200%200%2017.504-3.616l104.976-51.488%206.4%200.896a483.792%20483.792%200%200%200%20105.904%2013.552c9.216%200%2019.344%200%2030.4-0.896a283.536%20283.536%200%200%200%2069.072%2086.72%20353.6%20353.6%200%200%200%20227.456%2078.592%20399.808%20399.808%200%200%200%2094.848-14.4l78.272%2042.464a42.56%2042.56%200%200%200%2018.416%204.512%2039.248%2039.248%200%200%200%2034.08-19.872%2037.328%2037.328%200%200%200-15.648-51.488l-92.08-49.68a41.696%2041.696%200%200%200-27.632-3.616%20385.472%20385.472%200%200%201-91.2%2015.36c-133.52-0.896-244.032-90.336-244.032-201.456s110.496-200.544%20246.784-200.544c133.52%200%20245.872%2092.144%20245.872%20200.544a165.632%20165.632%200%200%201-47.888%20110.208%2037.76%2037.76%200%200%200%203.792%2053.264z%22%20fill%3D%22%2336AB60%22%20p-id%3D%222237%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M212.96%20315.728a49.184%2049.184%200%201%200%2098.368%200%2049.184%2049.184%200%201%200-98.368%200zM446.208%20315.728a49.184%2049.184%200%201%200%2098.368%200%2049.184%2049.184%200%201%200-98.368%200zM559.616%20549.44a49.184%2049.184%200%201%200%2098.368%200%2049.184%2049.184%200%201%200-98.368%200zM748.608%20549.44a49.184%2049.184%200%201%200%2098.368%200%2049.184%2049.184%200%201%200-98.368%200z%22%20fill%3D%22%2336AB60%22%20p-id%3D%222238%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}.kefubox .floor .erweimaimg{background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947336638%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222370%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M53.6%20556.8v424.8h318.4c58.4%200%20106.4-47.2%20106.4-106.4V556.8H53.6zM407.2%20864c0%2026.4-20.8%2047.2-47.2%2047.2H124V628h283.2V864zM726.4%20944.8V816h71.2v99.2c0%2016.8-13.6%2030.4-30.4%2030.4h-40.8v-0.8zM868%20944.8V775.2h71.2v145.6c0%2013.6-11.2%2024.8-24.8%2024.8h-46.4v-0.8zM868%20694.4v-136h71.2v111.2c0%2013.6-11.2%2024.8-24.8%2024.8-20.8-0.8-46.4-0.8-46.4%200zM726.4%20764V558.4h71.2v180.8c0%2013.6-11.2%2024.8-24.8%2024.8h-46.4zM584.8%20944.8V738.4H656v179.2c0%2015.2-12.8%2028-28%2028h-43.2v-0.8zM584.8%20659.2V558.4H656v77.6c0%2012.8-10.4%2023.2-23.2%2023.2h-48z%22%20fill%3D%22%233C82FF%22%20p-id%3D%222371%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M300.8%20840h-71.2c-19.2%200-35.2-16.8-35.2-35.2v-71.2c0-19.2%2016.8-35.2%2035.2-35.2h71.2c19.2%200%2035.2%2016.8%2035.2%2035.2v71.2c0.8%2018.4-16%2035.2-35.2%2035.2z%22%20fill%3D%22%23FF5B3E%22%20p-id%3D%222372%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M53.6%2060.8v424.8h318.4c58.4%200%20106.4-47.2%20106.4-106.4V60.8H53.6z%20m353.6%20304.8c0%2027.2-22.4%2049.6-49.6%2049.6H124V132h283.2v233.6z%22%20fill%3D%22%233C82FF%22%20p-id%3D%222373%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M300.8%20344h-71.2c-19.2%200-35.2-16.8-35.2-35.2v-71.2c0-19.2%2016.8-35.2%2035.2-35.2h71.2c19.2%200%2035.2%2016.8%2035.2%2035.2v71.2c0.8%2019.2-16%2035.2-35.2%2035.2z%22%20fill%3D%22%23FF5B3E%22%20p-id%3D%222374%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M548.8%2060.8v424.8h318.4c58.4%200%20106.4-47.2%20106.4-106.4V60.8H548.8zM903.2%20368c0%2026.4-20.8%2047.2-47.2%2047.2H620V132h283.2V368z%22%20fill%3D%22%233C82FF%22%20p-id%3D%222375%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M796.8%20344h-71.2c-19.2%200-35.2-16.8-35.2-35.2v-71.2c0-19.2%2016.8-35.2%2035.2-35.2h71.2c19.2%200%2035.2%2016.8%2035.2%2035.2v71.2c0.8%2019.2-16%2035.2-35.2%2035.2z%22%20fill%3D%22%23FF5B3E%22%20p-id%3D%222376%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");}.kefubox .floor > div{transform:translateX(300px);}.kefubox .floor:hover div{transition:all 300ms linear;transform:translateX(0);}.kefubox .floor .absbox{position:absolute;right:48px;top:0;z-index:3;}.kefubox .floor .back{box-shadow:0 0 15px #e4e4e4;height:50px;width:120px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .kftel{cursor:default;box-shadow:0 0 15px #e4e4e4;height:50px;font-weight:500;width:120px;display:flex;align-items:center;justify-content:center;font-size:16px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .qq{box-shadow:0 0 15px #e4e4e4;height:50px;width:120px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .erweima{box-shadow:0 0 15px #e4e4e4;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:15px;font-size:12px;color:#666;background:#fff;box-sizing:border-box;}.kefubox .floor .erweima img{width:100px;height:100px;}.kefubox .floor .erweima p{width:100px;padding:5px 0;display:flex;align-items:center;justify-content:center;font-size:12px;}.kefubox .floor > a{width:50px;height:50px;z-index:9999;background-position:center center;background-size:25px 25px;background-repeat:no-repeat;display:flex;align-items:center;justify-content:center;}.kefubox .floor > a:hover{transition:all 300ms linear;background-color:#e4e4e4;transform:scale(1.1);}.kefubox .floor > a img{height:25px;width:25px;display:block;}.kefubox .floor > a img:hover{transition:all 300ms linear;transform:scale(1.3);}.kefubox .floor:last-child{border-bottom:none;}}@media screen and (max-width:768px){.kefubox{position:fixed;right:2vw;top:45vh;z-index:99999}.kefubox .floor{display:none;}.kefubox .tel{box-shadow:0 0 5px #ddd;width:10vw;height:10vw;background-color:#fff;background-image:url("data:image/svg+xml;utf8,%3Csvg%20t%3D%221586947302970%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222086%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M187.6%20245.3l152.9%20152.9-27.9%2027.9c-5.7%205.7-6.3%2014.9-1.2%2021.2l26.5%2033.5c29.9%2037.8%2062.4%2074.3%2096.7%20108.6s70.8%2066.8%20108.6%2096.7l33.5%2026.5c6.4%205%2015.5%204.5%2021.2-1.2l27.9-27.9%20152.9%20152.9-56.2%2056.2c-2.2-1.1-4.3-2.1-6.4-3.2C591.8%20826.6%20478.4%20744.5%20379%20645c-99.4-99.4-181.6-212.8-244.3-337.1-1.1-2.1-2.2-4.3-3.2-6.4l56.1-56.2m0-83.9c-4.1%200-8.2%201.6-11.3%204.7L78%20264.4c-14.4%2014.4-18.2%2036.5-9.3%2054.9%202.9%205.9%205.8%2011.7%208.7%2017.6C141.7%20464.4%20227.1%20584%20333.6%20690.5s226.1%20191.9%20353.6%20256.2c5.8%202.9%2011.7%205.8%2017.6%208.7%206.7%203.2%2013.8%204.8%2020.9%204.8%2012.5%200%2024.8-4.9%2034-14.1l98.3-98.3c6.2-6.2%206.2-16.4%200-22.6l-220.9-221c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2%201.6-11.3%204.7l-21.6%2021.6c-5.8%205.8-15%206.3-21.4%201.1-31.7-25.7-62.3-53.3-91.8-82.7-29.4-29.4-57-60.1-82.7-91.8-5.2-6.4-4.7-15.6%201.1-21.4l21.6-21.6c6.2-6.2%206.2-16.4%200-22.6L199%20166.1c-3.2-3.2-7.3-4.7-11.4-4.7z%22%20fill%3D%22%233E3A39%22%20p-id%3D%222087%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M444.1%20362.5L223.3%20141.7c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.3-16.3%206.3-22.6%200zM882.3%20800.7L661.5%20579.9c-6.2-6.2-6.2-16.4%200-22.6l50.4-50.4c6.2-6.2%2016.4-6.2%2022.6%200l220.8%20220.8c6.2%206.2%206.2%2016.4%200%2022.6l-50.4%2050.4c-6.2%206.2-16.4%206.2-22.6%200z%22%20fill%3D%22%23FF6E83%22%20p-id%3D%222088%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");background-size:6vw 6vw;background-repeat:no-repeat;background-position:center center;display:flex;}.kefubox .tel:active{background-color:#f2f2f2;}.kefubox .tel .kftel{display:none;}}     
            </style>`;
    if(Obj.QQ.state==true){
        var QQ="<div class=\"floor\">"+
            "                <a href=\""+"http://wpa.qq.com/msgrd?v=3&amp;uin="+Obj.qq+"&amp;site=qq&amp;menu=yes"+"\"  class=\"qqlink\" target=\"_blank\">"+
            "                </a>"+
            "                </a>"+
            "                <div class=\"absbox\">"+
            "                    <div class=\"erweima\">"+
            "                        <img src=\""+Obj.QQ.imgURL+"\" alt=\"\">"+
            "                        <p>QQ客服</p>"+
            "                    </div>"+
            "                </div>"+
            "            </div>";
    }else{
        var wechatPerson="";
    }

    if(Obj.wechatPerson.state==true){
        var wechatPerson="<div class=\"floor\">"+
        "                <a href=\"javascript:;\" class=\"wechatimg cursor_default\" >"+
        "                </a>"+
        "                <div class=\"absbox\">"+
        "                    <div class=\"erweima\">"+
        "                        <img src=\""+Obj.wechatPerson.imgURL+"\" alt=\"\">"+
        "                        <p>微信客服</p>"+
        "                    </div>"+
        "                </div>"+
        "            </div>";
    }else{
        var wechatPerson="";
    }

    if(Obj.wechatofficial.state==true){
        var wechatofficial="<div class=\"floor\">"+
        "                <a href=\"javascript:;\" class=\"erweimaimg cursor_default\" >"+
        "                </a>"+
        "                <div class=\"absbox\">"+
        "                    <div class=\"erweima\">"+
        "                        <img src=\""+Obj.wechatofficial.imgURL+"\" alt=\"\">"+
        "                        <p>CSDN博客</p>"+
        "                    </div></div>";
    }else{
        var wechatofficial="";
    }

    var kefuHtml="<div class=\"kefubox\">"+
    "        <div class=\"main\">"+
    "            <div class=\"floor\">"+
    "                <a href=\""+Obj.index+"\"  class=\"home\">"+
    "                </a>"+
    "                <div class=\"absbox\">"+
    "                    <div class=\"back\">"+
    "                        返回首页"+
    "                    </div>"+
    "                </div>"+
    "            </div>"+
    "            <div class=\"floor tel\">"+
    "                <a href=\""+"tel:"+Obj.tel+"\" class=\"tellink cursor_default\" >"+
    "                </a>"+
    "                <div class=\"absbox\">"+
    "                    <div class=\"kftel\">"+Obj.tel+"</div>"+
    "                </div>"+
    "            </div>"+QQ+wechatPerson+wechatofficial+
    "            </div>"+
    "        </div>"+
    "    </div>";

    document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', cssStyle + kefuHtml);
}
var kefu = new Kefu({
    index: "",
    tel: "1577****201",//电话号码
    qq: "2624707049",//在线QQ
    wechatPerson: {
        state: true,// true是开启个人微信二维码, false不开启
        imgURL: "image/wechat.png" //图片路径
    },
    wechatofficial: {
        state: true,// true是开启CSDN博客的二维码, false不开启
        imgURL: "image/CSDN.jpg" //图片路径
    },//CSDN博客
    QQ:{
        state:true,// true是开启QQ的二维码, false不开启
        imgURL:"image/QQ.jpg",//图片路径
    }
});
