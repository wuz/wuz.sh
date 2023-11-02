import { logo, path } from "./logo.css";

const Logo = () => {
  return (
    <svg viewBox="0 0 167 135" className={logo}>
      <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stop-color="#FF9AA2">
          <animate
            attributeName="stop-color"
            values="#FF9AA2; #FFB7B2; #FFDAC1; #E2F0CB; #B5EAD7; #C7CEEA"
            dur="0.5s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="100%" stop-color="#C7CEEA">
          <animate
            attributeName="stop-color"
            values="#C7CEEA; #B5EAD7; #E2F0CB; #FFDAC1; #FFB7B2; #FF9AA2"
            dur="0.5s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
      <path
        className={path}
        fill-rule="evenodd"
        d="M34.593750000000114,29.500503540039077 L2.1562500000001137,13.179260253906264 L2.6159667968751137,12.251846313476577 L35.076599121093864,28.585510253906264 L67.75860595703136,47.185363769531264 C69.53936767578136,49.112548828125014 70.62554931640636,50.720581054687514 71.06811523437511,52.089294433593764 C71.29888916015636,52.8029022216797 71.33551025390636,53.71141052246095 71.24218750000011,54.92520141601564 C71.21520996093761,55.276855468750014 71.18054199218761,55.62275695800783 71.12530517578136,56.118896484375014 C70.98883056640636,57.34463500976564 70.94616699218761,57.94233703613283 70.96148681640636,58.151855468750014 C71.21203613281261,58.060729980468764 71.47277832031261,57.8888397216797 71.73297119140636,57.65090942382814 C72.33679199218761,57.09877014160158 72.78625488281261,56.34996032714845 72.86816406250011,55.691345214843764 C73.00354003906261,54.602661132812514 72.78912353515636,52.286071777343764 72.21887207031261,48.792846679687514 L72.18151855468761,48.56411743164064 L72.32586669921886,48.38357543945314 C73.08435058593761,47.43484497070314 74.38562011718761,46.878356933593764 76.20562744140636,46.68202209472658 C77.66247558593761,46.52485656738283 79.37365722656261,46.469177246093764 81.69348144531261,46.47468566894533 C82.31311035156261,46.47616577148439 82.84197998046886,46.480590820312514 83.89111328125011,46.4916229248047 C86.53356933593761,46.519409179687514 87.54229736328136,46.517456054687514 88.62908935546886,46.46109008789064 C90.17785644531261,46.38076782226564 91.37988281250011,46.1940155029297 92.20751953125011,45.94302368164064 C91.65405273437511,45.778625488281264 90.68182373046886,45.643676757812514 89.38507080078136,45.51272583007814 C87.99096679687511,45.37193298339845 86.22656250000011,45.236145019531264 84.09246826171886,45.105407714843764 C82.15661621093761,45.02523803710939 79.94683837890636,44.912109375000014 77.46270751953136,44.766052246093764 L77.51489257812511,43.73080444335939 C80.01916503906261,43.839721679687514 82.22900390625011,43.95278930664064 84.14477539062511,44.07008361816408 C86.48095703125011,44.166748046875014 88.41314697265636,44.21505737304689 89.94073486328136,44.21505737304689 C91.08544921875011,44.21505737304689 92.00012207031261,44.187866210937514 92.68139648437511,44.134155273437514 C92.10870361328136,44.02619934082033 91.36401367187511,43.91758728027345 90.45007324218761,43.80929565429689 C89.17095947265636,43.65769958496095 87.56530761718761,43.5071258544922 85.63354492187511,43.357666015625014 C83.59832763671886,43.249755859375014 81.19665527343761,43.09323120117189 78.42803955078136,42.8881072998047 L78.49438476562511,41.8536834716797 C81.25573730468761,42.00875854492189 83.65740966796886,42.1652069091797 85.69995117187511,42.32313537597658 C87.42297363281261,42.41438293457033 88.87933349609386,42.470458984375014 90.06884765625011,42.49136352539064 C90.72515869140636,42.50289916992189 91.29907226562511,42.50367736816408 91.78991699218761,42.49385070800783 C91.34216308593761,42.42955017089845 90.82330322265636,42.36500549316408 90.23400878906261,42.30044555664064 C88.09008789062511,42.06550598144533 85.02661132812511,41.83126831054689 81.04565429687511,41.598022460937514 C80.22222900390636,41.55458068847658 79.35229492187511,41.505981445312514 78.43585205078136,41.45223999023439 L78.49298095703136,40.41722106933595 C79.40234375000011,40.4657440185547 80.27203369140636,40.5143280029297 81.10223388671886,40.56295776367189 C84.46557617187511,40.74038696289064 87.04565429687511,40.83140563964845 88.84033203125011,40.83609008789064 C87.18151855468761,40.64602661132814 84.99041748046886,40.4806365966797 82.64855957031261,40.36935424804689 C81.95977783203136,40.33662414550783 81.37310791015636,40.31259155273439 80.13696289062511,40.264709472656264 L79.54406738281261,40.241699218750014 C73.93969726562511,40.02259826660158 71.33557128906261,39.77407836914064 69.28674316406261,39.06124877929689 C66.61340332031261,38.131164550781264 63.841857910156364,36.28964233398439 58.181518554687614,31.932495117187514 C57.554138183593864,31.449584960937514 55.137390136718864,29.579956054687514 54.596008300781364,29.162597656250014 C53.096984863281364,28.006896972656264 51.845764160156364,27.0524139404297 50.581359863281364,26.103836059570327 C47.334655761718864,23.668106079101577 44.273254394531364,21.480606079101577 41.065368652343864,19.33389282226564 C31.618469238281364,13.012084960937514 22.000732421875114,6.862960815429702 12.212097167968864,0.8865432739257955 L12.745300292968864,1.4210854715202004e-14 C22.546081542968864,5.983825683593764 32.175842285156364,12.140625000000014 41.634643554687614,18.470397949218764 C44.859069824218864,20.628173828125014 47.935180664062614,22.8262176513672 51.195800781250114,25.2723846435547 C52.464294433593864,26.22402954101564 53.718933105468864,27.181091308593764 55.221252441406364,28.33934020996095 C55.763671875000114,28.7574920654297 58.180053710937614,30.62680053710939 58.806152343750114,31.108779907226577 C64.37207031250011,35.39321899414064 67.09368896484386,37.20156860351564 69.62255859375011,38.08140563964845 C71.53466796875011,38.74665832519533 74.09985351562511,38.991455078125014 79.58398437500011,39.20584106445314 L80.17651367187511,39.22886657714845 C81.41558837890636,39.276855468750014 82.00427246093761,39.300964355468764 82.69708251953136,39.33389282226564 C87.88983154296886,39.580627441406264 91.69445800781261,40.016540527343764 92.26092529296886,40.55917358398439 C92.55676269531261,40.8425750732422 92.53625488281261,41.26773071289064 92.22760009765636,41.51107788085939 C92.65142822265636,41.57638549804689 93.00915527343761,41.64210510253908 93.30133056640636,41.70846557617189 C94.30200195312511,41.935729980468764 94.74206542968761,42.149169921875014 94.57470703125011,42.77944946289064 C94.50360107421886,43.04739379882814 94.28570556640636,43.22811889648439 93.86486816406261,43.345947265625014 C94.63543701171886,43.57154846191408 94.98791503906261,43.84095764160158 94.79473876953136,44.415039062500014 C94.66906738281261,44.78865051269533 94.21838378906261,45.00314331054689 93.30706787109386,45.121215820312514 C93.74542236328136,45.305236816406264 93.93200683593761,45.536682128906264 93.93200683593761,45.85679626464845 C93.93200683593761,46.70999145507814 91.88714599609386,47.33010864257814 88.68200683593761,47.496337890625014 C87.56524658203136,47.554260253906264 86.54724121093761,47.55624389648439 83.88037109375011,47.52818298339845 C82.83392333984386,47.51718139648439 82.30706787109386,47.51277160644533 81.69104003906261,47.51130676269533 C79.40576171875011,47.50587463378908 77.72625732421886,47.56053161621095 76.31518554687511,47.71275329589845 C74.86968994140636,47.86866760253908 73.86199951171886,48.262023925781264 73.27355957031261,48.86795043945314 C73.83044433593761,52.32484436035158 74.03747558593761,54.62631225585939 73.88903808593761,55.82020568847658 C73.64587402343761,57.77590942382814 71.12902832031261,60.07717895507814 70.17816162109386,58.88638305664064 C69.84423828125011,58.468200683593764 69.85614013671886,58.219177246093764 70.10284423828136,56.00332641601564 C70.15686035156261,55.518066406250014 70.19049072265636,55.18234252929689 70.21643066406261,54.84518432617189 C70.29998779296886,53.757324218750014 70.26794433593761,52.96107482910158 70.08984375000011,52.410400390625014 C69.70660400390636,51.22531127929689 68.71563720703136,49.75132751464845 67.11370849609386,48.008911132812514 L34.593750000000114,29.500503540039077 L34.593750000000114,29.500503540039077ZM109.59100341796886,42.22041320800783 L109.35095214843761,41.21357727050783 L145.78619384765636,30.54074096679689 L131.66265869140636,38.63058471679689 L155.92413330078136,36.47409057617189 L156.0825195312501,37.4960174560547 L116.23895263671886,46.549255371093764 L125.28308105468761,39.20381164550783 L109.59100341796886,42.22041320800783 L109.59100341796886,42.22041320800783ZM36.163513183593864,70.36473083496095 C27.420776367187614,66.22149658203126 15.367004394531364,60.04006958007814 1.1368683772161603e-13,51.81954956054689 L0.4824829101563637,50.903991699218764 C15.836059570312614,59.117309570312514 27.876403808593864,65.29183959960939 36.601440429687614,69.42669677734376 C45.308471679687614,73.55303955078126 51.837402343750114,76.18020629882814 56.173950195312614,77.30598449707033 C57.884155273437614,78.48074340820314 59.037841796875114,79.2421112060547 59.795715332031364,79.66479492187501 C60.708251953125114,80.17373657226564 61.668701171875114,80.63888549804689 62.751647949218864,81.11079406738283 C63.164550781250114,81.29071044921876 63.575500488281364,81.46340942382814 64.08276367187511,81.67181396484376 C64.11022949218761,81.68310546875001 65.00866699218761,82.05027770996095 65.23852539062511,82.14584350585939 C66.75244140625011,82.77529907226564 67.56365966796886,82.97750854492189 69.26275634765636,83.25537109375001 C69.40576171875011,83.27874755859376 69.50268554687511,83.29483032226564 69.60119628906261,83.31161499023439 C70.48028564453136,83.46151733398439 71.11285400390636,83.61706542968751 71.87249755859386,83.89886474609376 C72.15692138671886,84.00436401367189 72.43041992187511,84.11245727539064 72.69482421875011,84.22357177734376 C73.43109130859386,84.53298950195314 74.07983398437511,84.85719299316408 74.74597167968761,85.23663330078126 C75.00085449218761,85.38183593750001 75.24597167968761,85.52758789062501 75.56176757812511,85.72006225585939 C75.64465332031261,85.77058410644533 75.93939208984386,85.95100402832033 75.93939208984386,85.95103454589845 C76.08819580078136,86.04202270507814 76.19818115234386,86.1088104248047 76.30566406250011,86.17327880859376 C76.44732666015636,86.25825500488283 76.57531738281261,86.33348083496095 76.69873046875011,86.40405273437501 C78.52655029296886,87.44912719726564 79.71649169921886,88.09472656250001 80.62493896484386,88.51960754394533 C81.13067626953136,88.75616455078126 81.52905273437511,88.91308593750001 81.81787109375011,88.98968505859376 C81.90429687500011,88.93643188476564 81.82739257812511,88.82769775390626 81.72167968750011,88.6974334716797 C81.30334472656261,88.18199157714845 80.52990722656261,87.42953491210939 79.00469970703136,86.0404510498047 C78.91687011718761,85.96047973632814 78.70373535156261,85.82186889648439 78.36804199218761,85.62765502929689 C78.15856933593761,85.50646972656251 77.26708984375011,85.00996398925783 77.26690673828136,85.01031494140626 C77.11199951171886,84.92335510253908 76.97595214843761,84.84602355957033 76.84802246093761,84.77197265625001 C76.10015869140636,84.33908081054689 75.62701416015636,84.01736450195314 75.35528564453136,83.71810913085939 C74.78680419921886,83.09205627441408 75.09075927734386,82.42239379882814 75.98034667968761,82.28208923339845 C76.82647705078136,82.14865112304689 77.67535400390636,82.4824676513672 81.89746093750011,84.36932373046876 C82.05706787109386,84.44067382812501 82.19976806640636,84.50427246093751 82.33612060546886,84.56483459472658 C84.26977539062511,85.42369079589845 85.48974609375011,85.91165161132814 86.47479248046886,86.18441772460939 C87.03753662109386,86.34022521972658 87.47106933593761,86.40504455566408 87.75482177734386,86.37915039062501 C87.94226074218761,86.36204528808595 87.98095703125011,86.33564758300783 87.99359130859386,86.28366088867189 C88.13092041015636,85.7174530029297 86.84350585937511,84.88787841796876 82.74652099609386,83.10060119628908 C82.52478027343761,83.00384521484376 82.15350341796886,82.87698364257814 81.57525634765636,82.6971893310547 C81.31567382812511,82.61648559570314 80.15429687500011,82.26435852050783 79.85461425781261,82.17153930664064 C79.24768066406261,81.98355102539064 78.76342773437511,81.82543945312501 78.33721923828136,81.67312622070314 C77.36273193359386,81.32492065429689 76.76318359375011,81.03726196289064 76.47399902343761,80.71519470214845 C76.17523193359386,80.3823699951172 76.16333007812511,79.93246459960939 76.51586914062511,79.62232971191408 C76.73004150390636,79.43391418457033 77.06622314453136,79.31146240234376 77.56286621093761,79.21389770507814 C78.18395996093761,79.09188842773439 79.38623046875011,79.26309204101564 83.37145996093761,79.94076538085939 C86.23614501953136,80.42782592773439 87.46289062500011,80.61488342285158 88.34753417968761,80.67175292968751 C90.77148437500011,80.82754516601564 91.75457763671886,80.79171752929689 92.00506591796886,80.60476684570314 C91.86730957031261,80.44369506835939 91.65557861328136,80.27821350097658 91.36938476562511,80.10165405273439 C90.82189941406261,79.76385498046876 90.04522705078136,79.41244506835939 89.34484863281261,79.17463684082033 C88.47460937500011,78.87915039062501 87.21014404296886,78.60655212402345 84.20605468750011,78.0266571044922 C81.67102050781261,77.53738403320314 80.68176269531261,77.33486938476564 79.70440673828136,77.08648681640626 C79.06506347656261,76.92402648925783 78.59295654296886,76.77503967285158 78.27435302734386,76.62777709960939 C77.69226074218761,76.35874938964845 77.34674072265636,75.95967102050783 77.76361083984386,75.4397430419922 C78.03540039062511,75.10081481933595 78.39666748046886,75.10321044921876 79.48632812500011,75.24214172363283 C79.89636230468761,75.29441833496095 81.86517333984386,75.59085083007814 82.33300781250011,75.65635681152345 C84.25115966796886,75.92498779296876 85.89654541015636,76.08477783203126 87.55114746093761,76.1283416748047 C87.87811279296886,76.13696289062501 88.11645507812511,76.15692138671876 88.86334228515636,76.22988891601564 C89.04284667968761,76.24743652343751 89.15881347656261,76.2584686279297 89.27795410156261,76.26916503906251 C90.20178222656261,76.35214233398439 90.77569580078136,76.3525848388672 91.16064453125011,76.24755859375001 C91.49157714843761,76.15725708007814 91.56066894531261,76.05429077148439 91.48339843750011,75.70956420898439 C91.41925048828136,75.42346191406251 89.72808837890636,74.71247863769533 87.46343994140636,74.37951660156251 C86.65264892578136,74.26033020019533 85.82006835937511,74.1936492919922 84.18969726562511,74.09974670410158 C81.13250732421886,73.92364501953126 80.07379150390636,73.84143066406251 78.35766601562511,73.59344482421876 C78.12908935546886,73.56040954589845 77.87799072265636,73.52667236328126 77.56793212890636,73.48692321777345 C77.53698730468761,73.48294067382814 76.34497070312511,73.33334350585939 75.98999023437511,73.28631591796876 C73.09228515625011,72.9023895263672 71.71203613281261,72.53016662597658 71.24249267578136,71.65750122070314 C70.97485351562511,71.1600799560547 71.11102294921886,70.59602355957033 71.52154541015636,69.87405395507814 C71.66735839843761,69.61764526367189 71.84912109375011,69.33917236328126 72.09149169921886,68.99401855468751 C72.18487548828136,68.8610076904297 72.28332519531261,68.72338867187501 72.41833496093761,68.53677368164064 C72.43518066406261,68.51362609863283 72.68310546875011,68.17129516601564 72.75482177734386,68.0717010498047 C73.01562500000011,67.70950317382814 73.20428466796886,67.43823242187501 73.37567138671886,67.17474365234376 C73.79943847656261,66.52314758300783 74.05895996093761,65.99880981445314 74.15936279296886,65.55946350097658 C74.52752685546886,63.94844055175783 74.26367187500011,62.08412170410158 73.96484375000011,61.82872009277345 C73.85900878906261,61.98109436035158 72.76599121093761,64.41290283203126 72.12408447265636,65.3927459716797 C71.21722412109386,66.77705383300783 70.28338623046886,68.02513122558595 69.32226562500011,69.13690185546876 L69.14788818359386,69.3386688232422 C67.97729492187511,69.22174072265626 66.82019042968761,69.39692687988283 65.41912841796886,69.84622192382814 C63.973510742187614,70.30981445312501 62.596130371093864,70.82997131347658 61.286987304687614,71.40660095214845 C57.231079101562614,71.03277587890626 52.305053710937614,68.86605834960939 46.223083496093864,64.95507812500001 C40.190612792968864,61.07589721679689 25.083251953125114,50.373352050781264 0.8867187500001137,32.83786010742189 L1.4874877929688637,31.99632263183595 C25.665832519531364,49.5186004638672 40.766967773437614,60.21676635742189 46.776611328125114,64.08126831054689 C52.663085937500114,67.86654663085939 57.412719726562614,69.97045898437501 61.002075195312614,70.40100097656251 C62.306274414062614,69.83198547363283 63.674621582031364,69.31781005859376 65.10711669921886,68.85842895507814 C66.50366210937511,68.4105682373047 67.70422363281261,68.20907592773439 68.71405029296886,68.26039123535158 C69.58557128906261,67.23385620117189 70.43609619140636,66.08764648437501 71.26538085937511,64.82171630859376 C71.84838867187511,63.931762695312514 72.93835449218761,61.50685119628908 73.02239990234386,61.375427246093764 C73.30529785156261,60.93318176269533 73.64819335937511,60.69497680664064 74.10363769531261,60.7822723388672 C75.26208496093761,61.00434875488283 75.67199707031261,63.560485839843764 75.16198730468761,65.79208374023439 C75.02850341796886,66.37622070312501 74.72100830078136,66.99758911132814 74.23620605468761,67.74291992187501 C74.05419921875011,68.02278137207033 73.85717773437511,68.30604553222658 73.58764648437511,68.68037414550783 C72.33166503906261,70.42489624023439 72.03259277343761,70.95083618164064 72.14703369140636,71.16345214843751 C72.36950683593761,71.57698059082033 73.71154785156261,71.9388885498047 76.12408447265636,72.25854492187501 C76.47497558593761,72.30502319335939 77.66375732421886,72.45422363281251 77.69781494140636,72.45858764648439 C78.01281738281261,72.49897766113283 78.26898193359386,72.53338623046876 78.50372314453136,72.56732177734376 C80.18041992187511,72.80960083007814 81.22167968750011,72.89047241210939 84.24847412109386,73.06481933593751 C85.90863037109386,73.1604461669922 86.76159667968761,73.22874450683595 87.61199951171886,73.35375976562501 C90.31445312500011,73.75108337402345 92.28479003906261,74.57943725585939 92.48699951171886,75.48110961914064 C92.69134521484386,76.39245605468751 92.27111816406261,77.01852416992189 91.42956542968761,77.24813842773439 C90.88763427734386,77.39601135253908 90.23107910156261,77.39549255371095 89.18658447265636,77.30169677734376 C89.06414794921886,77.29071044921876 88.94598388671886,77.27944946289064 88.76403808593761,77.26168823242189 C88.04547119140636,77.19148254394533 87.81683349609386,77.17231750488283 87.52429199218761,77.16461181640626 C86.29760742187511,77.13232421875001 85.08013916015636,77.03820800781251 83.76287841796886,76.8854217529297 L84.30364990234386,76.99002075195314 C87.46752929687511,77.6007537841797 88.73779296875011,77.87460327148439 89.67346191406261,78.19229125976564 C91.81964111328136,78.92105102539064 93.48449707031261,79.94821166992189 92.98815917968761,80.98951721191408 C92.56921386718761,81.86840820312501 91.70758056640636,81.92645263671876 88.28204345703136,81.70626831054689 C87.34521484375011,81.64605712890626 86.11224365234386,81.45803833007814 83.26947021484386,80.97470092773439 C79.57751464843761,80.34689331054689 78.18273925781261,80.14826965332033 77.75976562500011,80.2313690185547 C77.87060546875011,80.38635253906251 78.23144531250011,80.5354461669922 78.68115234375011,80.69613647460939 C79.09112548828136,80.84265136718751 79.56274414062511,80.99664306640626 80.15692138671886,81.18066406250001 C80.45251464843761,81.27223205566408 81.61462402343761,81.62457275390626 81.87866210937511,81.70666503906251 C82.49249267578136,81.89752197265626 82.88787841796886,82.03262329101564 83.15533447265636,82.14932250976564 C88.00756835937511,84.26608276367189 89.33471679687511,85.12123107910158 88.99304199218761,86.52978515625001 C88.75244140625011,87.52148437500001 87.75109863281261,87.61285400390626 86.20214843750011,87.18397521972658 C85.15246582031261,86.89334106445314 83.90051269531261,86.39257812500001 81.92108154296886,85.51338195800783 C81.78393554687511,85.45246887207033 81.64056396484386,85.38856506347658 81.48022460937511,85.31692504882814 C78.38562011718761,83.93392944335939 77.11047363281261,83.40426635742189 76.46594238281261,83.31173706054689 C76.68481445312511,83.46786499023439 76.98370361328136,83.65496826171876 77.36059570312511,83.87313842773439 C77.48217773437511,83.94354248046876 77.61224365234386,84.01747131347658 77.76049804687511,84.10072326660158 L77.76770019531261,84.1046600341797 C77.85308837890636,84.15188598632814 78.67401123046886,84.6092987060547 78.88037109375011,84.7286834716797 C79.28045654296886,84.96015930175783 79.53356933593761,85.12475585937501 79.69464111328136,85.27143859863283 C81.26116943359386,86.69812011718751 82.05468750000011,87.47015380859376 82.51818847656261,88.04124450683595 C83.14514160156261,88.8137664794922 83.28326416015636,89.44284057617189 82.69189453125011,89.89996337890626 C81.96820068359386,90.45944213867189 80.53247070312511,89.78794860839845 76.19091796875011,87.30561828613283 C76.06079101562511,87.23121643066408 75.92675781250011,87.15243530273439 75.77935791015636,87.0640106201172 C75.66986083984386,86.99832153320314 75.55859375000011,86.93077087402345 75.40557861328136,86.8372039794922 C75.37005615234386,86.81546020507814 75.10620117187511,86.65396118164064 75.02929687500011,86.60705566406251 C74.72131347656261,86.41938781738283 74.48425292968761,86.27839660644533 74.23956298828136,86.13900756835939 C73.60760498046886,85.77903747558595 72.99530029296886,85.47302246093751 72.29870605468761,85.18031311035158 C72.04779052734386,85.07485961914064 71.78784179687511,84.97210693359376 71.51702880859386,84.87164306640626 C70.82495117187511,84.6149139404297 70.25097656250011,84.47377014160158 69.42950439453136,84.33370971679689 C69.33380126953136,84.31738281250001 69.23876953125011,84.30163574218751 69.09796142578136,84.27859497070314 C67.32745361328136,83.98907470703126 66.44628906250011,83.76940917968751 64.84606933593761,83.10408020019533 C64.61956787109386,83.00991821289064 63.724365234375114,82.64405822753908 63.694274902343864,82.63169860839845 C63.180908203125114,82.42077636718751 62.763671875000114,82.24545288085939 62.343200683593864,82.06222534179689 C61.231811523437614,81.57791137695314 60.242248535156364,81.09866333007814 59.297424316406364,80.57174682617189 C58.512390136718864,80.13389587402345 57.357604980468864,79.37313842773439 55.825805664062614,78.28594970703126 C51.413269042968864,77.12759399414064 44.863830566406364,74.48791503906251 36.163513183593864,70.36473083496095 L36.163513183593864,70.36473083496095ZM102.32568359375011,37.62739562988283 L101.35156250000011,33.65730285644533 L100.44445800781261,37.63760375976564 L97.22137451171886,38.71121215820314 L100.51904296875011,39.45260620117189 L101.28741455078136,43.89302062988283 L102.32366943359386,39.4561004638672 L105.75421142578136,38.672424316406264 L102.32568359375011,37.62739562988283 L102.32568359375011,37.62739562988283ZM104.92047119140636,51.998352050781264 L105.11712646484386,53.0149383544922 L120.32214355468761,50.683288574218764 L116.19720458984386,54.323059082031264 L133.25091552734386,53.1382293701172 L125.78875732421886,58.88841247558595 L166.24859619140636,50.41127014160158 L166.08050537109386,49.3894500732422 L137.42169189453136,52.97280883789064 L142.5021972656251,48.61143493652345 L127.00848388671886,50.27847290039064 L133.96026611328136,45.02464294433595 L104.92047119140636,51.998352050781264 L104.92047119140636,51.998352050781264ZM85.97186279296886,58.749511718750014 L85.19934082031261,55.60073852539064 L84.47937011718761,58.75973510742189 L81.91821289062511,59.612854003906264 L84.52111816406261,60.198059082031264 L85.13806152343761,63.76321411132814 L85.96990966796886,60.201538085937514 L88.69403076171886,59.57923889160158 L85.97186279296886,58.749511718750014 L85.97186279296886,58.749511718750014ZM92.63232421875011,62.19630432128908 L92.81805419921886,61.17732238769533 L142.91119384765636,68.68191528320314 L134.0516357421876,69.80955505371095 L163.94183349609386,76.9469451904297 L163.7402343750001,77.9628143310547 L112.90997314453136,69.59425354003908 L121.24255371093761,68.50857543945314 L92.63232421875011,62.19630432128908 L92.63232421875011,62.19630432128908ZM107.82885742187511,71.17294311523439 L107.05633544921886,68.02416992187501 L106.33636474609386,71.18316650390626 L103.77520751953136,72.03628540039064 L106.37811279296886,72.62149047851564 L106.99505615234386,76.18664550781251 L107.82690429687511,72.62496948242189 L110.55102539062511,72.00267028808595 L107.82885742187511,71.17294311523439 L107.82885742187511,71.17294311523439ZM129.0007324218751,92.74588012695314 L99.31494140625011,76.64871215820314 L99.74761962890636,75.71017456054689 L112.73022460937511,80.87225341796876 L109.72991943359386,76.72686767578126 L130.1597900390626,86.70718383789064 L124.91448974609386,80.31134033203126 L167.0000000000001,103.00096130371095 L166.54241943359386,103.92889404296876 L137.6922607421876,90.56768798828126 L145.31549072265636,97.94082641601564 L121.73443603515636,85.45559692382814 L129.0007324218751,92.74588012695314 L129.0007324218751,92.74588012695314ZM100.62670898437511,85.16734313964845 L99.85418701171886,82.01856994628908 L99.13421630859386,85.17756652832033 L96.57305908203136,86.0306854248047 L99.17596435546886,86.6158905029297 L99.79290771484386,90.18104553222658 L100.62475585937511,86.61936950683595 L103.34887695312511,85.99707031250001 L100.62670898437511,85.16734313964845 L100.62670898437511,85.16734313964845ZM78.20391845703136,92.40689086914064 L78.97644042968761,95.55566406250001 L81.69860839843761,96.38539123535158 L78.97448730468761,97.00769042968751 L78.14263916015636,100.56936645507814 L77.52569580078136,97.00421142578126 L74.92279052734386,96.41900634765626 L77.48394775390636,95.56588745117189 L78.20391845703136,92.40689086914064 L78.20391845703136,92.40689086914064ZM88.50665283203136,95.79335021972658 L87.82586669921886,96.56826782226564 L100.55926513671886,109.32873535156251 L93.44787597656261,107.24011230468751 L116.20281982421886,125.00000000000001 L116.87567138671886,124.21784973144533 L105.32403564453136,112.95069885253908 L113.55963134765636,115.64166259765626 L88.50665283203136,95.79335021972658 L88.50665283203136,95.79335021972658Z"
        opacity="1"
      ></path>
    </svg>
  );
};

export default Logo;
