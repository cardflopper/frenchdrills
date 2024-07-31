const conjugations = {
    aimer: {
        tenses:{
            present: ['j\'aime', 'tu aimes', 'il/elle aime', 'nous aimons', 'vous aimez', 'ils/elles aiment'],
            imparfait: ['j\'aimais', 'tu aimais', 'il/elle aimait', 'nous aimions', 'vous aimiez', 'ils/elles aimaient'],
            futur: ['j\'aimerai', 'tu aimeras', 'il/elle aimera', 'nous aimerons', 'vous aimerez', 'ils/elles aimeront'],
            passé_compose: ['j\'ai aimé', 'tu as aimé', 'il/elle a aimé', 'nous avons aimé', 'vous avez aimé', 'ils/elles ont aimé'],
            conditionnel_present: ['j\'aimerais', 'tu aimerais', 'il/elle aimerait', 'nous aimerions', 'vous aimeriez', 'ils/elles aimeraient']
        }
    },
    chanter: {
        tenses:{
            present: ['je chante', 'tu chantes', 'il/elle chante', 'nous chantons', 'vous chantez', 'ils/elles chantent'],
            imparfait: ['je chantais', 'tu chantais', 'il/elle chantait', 'nous chantions', 'vous chantiez', 'ils/elles chantaient'],
            futur: ['je chanterai', 'tu chanteras', 'il/elle chantera', 'nous chanterons', 'vous chanterez', 'ils/elles chanteront'],
            passé_compose: ['j\'ai chanté', 'tu as chanté', 'il/elle a chanté', 'nous avons chanté', 'vous avez chanté', 'ils/elles ont chanté'],
            conditionnel_present: ['je chanterais', 'tu chanterais', 'il/elle chanterait', 'nous chanterions', 'vous chanteriez', 'ils/elles chanteraient']
        }
    },
    danser: {
        tenses:{
            present: ['je danse', 'tu danses', 'il/elle danse', 'nous dansons', 'vous dansez', 'ils/elles dansent'],
            imparfait: ['je dansais', 'tu dansais', 'il/elle dansait', 'nous dansions', 'vous dansiez', 'ils/elles dansaient'],
            futur: ['je danserai', 'tu danseras', 'il/elle dansera', 'nous danserons', 'vous danserez', 'ils/elles danseront'],
            passé_compose: ['j\'ai dansé', 'tu as dansé', 'il/elle a dansé', 'nous avons dansé', 'vous avez dansé', 'ils/elles ont dansé'],
            conditionnel_present: ['je danserais', 'tu danserais', 'il/elle danserait', 'nous danserions', 'vous danseriez', 'ils/elles danseraient']
        }
    },
    écouter: {
        tenses:{
            present: ['j\'écoute', 'tu écoutes', 'il/elle écoute', 'nous écoutons', 'vous écoutez', 'ils/elles écoutent'],
            imparfait: ['j\'écoutais', 'tu écoutais', 'il/elle écoutait', 'nous écoutions', 'vous écoutiez', 'ils/elles écoutaient'],
            futur: ['j\'écouterai', 'tu écouteras', 'il/elle écoutera', 'nous écouterons', 'vous écouterez', 'ils/elles écouteront'],
            passé_compose: ['j\'ai écouté', 'tu as écouté', 'il/elle a écouté', 'nous avons écouté', 'vous avez écouté', 'ils/elles ont écouté'],
            conditionnel_present: ['j\'écouterais', 'tu écouterais', 'il/elle écouterait', 'nous écouterions', 'vous écouteriez', 'ils/elles écouteraient']
        }
    },
    étudier: {
        tenses:{
            present: ['j\'étudie', 'tu étudies', 'il/elle étudie', 'nous étudions', 'vous étudiez', 'ils/elles étudient'],
            imparfait: ['j\'étudiais', 'tu étudiais', 'il/elle étudiait', 'nous étudiions', 'vous étudiiez', 'ils/elles étudiaient'],
            futur: ['j\'étudierai', 'tu étudieras', 'il/elle étudiera', 'nous étudierons', 'vous étudierez', 'ils/elles étudieront'],
            passé_compose: ['j\'ai étudié', 'tu as étudié', 'il/elle a étudié', 'nous avons étudié', 'vous avez étudié', 'ils/elles ont étudié'],
            conditionnel_present: ['j\'étudierais', 'tu étudierais', 'il/elle étudierait', 'nous étudierions', 'vous étudieriez', 'ils/elles étudieraient']
        }
    },
    jouer: {
        tenses:{
            present: ['je joue', 'tu joues', 'il/elle joue', 'nous jouons', 'vous jouez', 'ils/elles jouent'],
            imparfait: ['je jouais', 'tu jouais', 'il/elle jouait', 'nous jouions', 'vous jouiez', 'ils/elles jouaient'],
            futur: ['je jouerai', 'tu joueras', 'il/elle jouera', 'nous jouerons', 'vous jouerez', 'ils/elles joueront'],
            passé_compose: ['j\'ai joué', 'tu as joué', 'il/elle a joué', 'nous avons joué', 'vous avez joué', 'ils/elles ont joué'],
            conditionnel_present: ['je jouerais', 'tu jouerais', 'il/elle jouerait', 'nous jouerions', 'vous joueriez', 'ils/elles joueraient']
        }
    },
    manger: {
        tenses:{
            present: ['je mange', 'tu manges', 'il/elle mange', 'nous mangeons', 'vous mangez', 'ils/elles mangent'],
            imparfait: ['je mangeais', 'tu mangeais', 'il/elle mangeait', 'nous mangions', 'vous mangiez', 'ils/elles mangeaient'],
            futur: ['je mangerai', 'tu mangeras', 'il/elle mangera', 'nous mangerons', 'vous mangerez', 'ils/elles mangeront'],
            passé_compose: ['j\'ai mangé', 'tu as mangé', 'il/elle a mangé', 'nous avons mangé', 'vous avez mangé', 'ils/elles ont mangé'],
            conditionnel_present: ['je mangerais', 'tu mangerais', 'il/elle mangerait', 'nous mangerions', 'vous mangeriez', 'ils/elles mangeraient']
        }
    },
    nager: {
        tenses:{
            present: ['je nage', 'tu nages', 'il/elle nage', 'nous nageons', 'vous nagez', 'ils/elles nagent'],
            imparfait: ['je nageais', 'tu nageais', 'il/elle nageait', 'nous nagions', 'vous nagiez', 'ils/elles nageaient'],
            futur: ['je nagerai', 'tu nageras', 'il/elle nagera', 'nous nagerons', 'vous nagerez', 'ils/elles nageront'],
            passé_compose: ['j\'ai nagé', 'tu as nagé', 'il/elle a nagé', 'nous avons nagé', 'vous avez nagé', 'ils/elles ont nagé'],
            conditionnel_present: ['je nagerais', 'tu nagerais', 'il/elle nagerait', 'nous nagerions', 'vous nageriez', 'ils/elles nageraient']
        }
    },
    parler: {
        tenses:{
            present: ['je parle', 'tu parles', 'il/elle parle', 'nous parlons', 'vous parlez', 'ils/elles parlent'],
            imparfait: ['je parlais', 'tu parlais', 'il/elle parlait', 'nous parlions', 'vous parliez', 'ils/elles parlaient'],
            futur: ['je parlerai', 'tu parleras', 'il/elle parlera', 'nous parlerons', 'vous parlerez', 'ils/elles parleront'],
            passé_compose: ['j\'ai parlé', 'tu as parlé', 'il/elle a parlé', 'nous avons parlé', 'vous avez parlé', 'ils/elles ont parlé'],
            conditionnel_present: ['je parlerais', 'tu parlerais', 'il/elle parlerait', 'nous parlerions', 'vous parleriez', 'ils/elles parleraient']
        }
    },
    travailler: {
        tenses:{
            present: ['je travaille', 'tu travailles', 'il/elle travaille', 'nous travaillons', 'vous travaillez', 'ils/elles travaillent'],
            imparfait: ['je travaillais', 'tu travaillais', 'il/elle travaillait', 'nous travaillions', 'vous travailliez', 'ils/elles travaillaient'],
            futur: ['je travaillerai', 'tu travailleras', 'il/elle travaillera', 'nous travaillerons', 'vous travaillerez', 'ils/elles travailleront'],
            passé_compose: ['j\'ai travaillé', 'tu as travaillé', 'il/elle a travaillé', 'nous avons travaillé', 'vous avez travaillé', 'ils/elles ont travaillé'],
            conditionnel_present: ['je travaillerais', 'tu travaillerais', 'il/elle travaillerait', 'nous travaillerions', 'vous travailleriez', 'ils/elles travailleraient']
        }
    },

    voyager: {
        tenses:{
            present: ['je voyage', 'tu voyages', 'il/elle voyage', 'nous voyageons', 'vous voyagez', 'ils/elles voyagent'],
            imparfait: ['je voyageais', 'tu voyageais', 'il/elle voyageait', 'nous voyagions', 'vous voyagiez', 'ils/elles voyageaient'],
            futur: ['je voyagerai', 'tu voyageras', 'il/elle voyagera', 'nous voyagerons', 'vous voyagerez', 'ils/elles voyageront'],
            passé_compose: ['j\'ai voyagé', 'tu as voyagé', 'il/elle a voyagé', 'nous avons voyagé', 'vous avez voyagé', 'ils/elles ont voyagé'],
            conditionnel_present: ['je voyagerais', 'tu voyagerais', 'il/elle voyagerait', 'nous voyagerions', 'vous voyageriez', 'ils/elles voyageraient']
        }
    },
    regarder: {
        tenses:{
            present: ['je regarde', 'tu regardes', 'il/elle regarde', 'nous regardons', 'vous regardez', 'ils/elles regardent'],
            imparfait: ['je regardais', 'tu regardais', 'il/elle regardait', 'nous regardions', 'vous regardiez', 'ils/elles regardaient'],
            futur: ['je regarderai', 'tu regarderas', 'il/elle regardera', 'nous regarderons', 'vous regarderez', 'ils/elles regarderont'],
            passé_compose: ['j\'ai regardé', 'tu as regardé', 'il/elle a regardé', 'nous avons regardé', 'vous avez regardé', 'ils/elles ont regardé'],
            conditionnel_present: ['je regarderais', 'tu regarderais', 'il/elle regarderait', 'nous regarderions', 'vous regarderiez', 'ils/elles regarderaient']
        }
    },
    travailler: {
        tenses:{
            present: ['je travaille', 'tu travailles', 'il/elle travaille', 'nous travaillons', 'vous travaillez', 'ils/elles travaillent'],
            imparfait: ['je travaillais', 'tu travaillais', 'il/elle travaillait', 'nous travaillions', 'vous travailliez', 'ils/elles travaillaient'],
            futur: ['je travaillerai', 'tu travailleras', 'il/elle travaillera', 'nous travaillerons', 'vous travaillerez', 'ils/elles travailleront'],
            passé_compose: ['j\'ai travaillé', 'tu as travaillé', 'il/elle a travaillé', 'nous avons travaillé', 'vous avez travaillé', 'ils/elles ont travaillé'],
            conditionnel_present: ['je travaillerais', 'tu travaillerais', 'il/elle travaillerait', 'nous travaillerions', 'vous travailleriez', 'ils/elles travailleraient']
        }
    },
    /*================================================================================================================================ */
    /* RE verbs  */
    /*================================================================================================================================ */
    attendre: {
        tenses:{
            present: ['j\'attends', 'tu attends', 'il/elle attend', 'nous attendons', 'vous attendez', 'ils/elles attendent'],
            imparfait: ['j\'attendais', 'tu attendais', 'il/elle attendait', 'nous attendions', 'vous attendiez', 'ils/elles attendaient'],
            futur: ['j\'attendrai', 'tu attendras', 'il/elle attendra', 'nous attendrons', 'vous attendrez', 'ils/elles attendront'],
            passé_compose: ['j\'ai attendu', 'tu as attendu', 'il/elle a attendu', 'nous avons attendu', 'vous avez attendu', 'ils/elles ont attendu'],
            conditionnel_present: ['j\'attendrais', 'tu attendrais', 'il/elle attendrait', 'nous attendrions', 'vous attendriez', 'ils/elles attendraient']
        }
    },
    entendre: {
        tenses:{
            present: ['j\'entends', 'tu entends', 'il/elle entend', 'nous entendons', 'vous entendez', 'ils/elles entendent'],
            imparfait: ['j\'entendais', 'tu entendais', 'il/elle entendait', 'nous entendions', 'vous entendiez', 'ils/elles entendaient'],
            futur: ['j\'entendrai', 'tu entendras', 'il/elle entendra', 'nous entendrons', 'vous entendrez', 'ils/elles entendront'],
            passé_compose: ['j\'ai entendu', 'tu as entendu', 'il/elle a entendu', 'nous avons entendu', 'vous avez entendu', 'ils/elles ont entendu'],
            conditionnel_present: ['j\'entendrais', 'tu entendrais', 'il/elle entendrait', 'nous entendrions', 'vous entendriez', 'ils/elles entendraient']
        }
    },
    confondre: {
        tenses:{
            present: ['je confonds', 'tu confonds', 'il/elle confond', 'nous confondons', 'vous confondez', 'ils/elles confondent'],
            imparfait: ['je confondais', 'tu confondais', 'il/elle confondait', 'nous confondions', 'vous confondiez', 'ils/elles confondaient'],
            futur: ['je confondrai', 'tu confondras', 'il/elle confondra', 'nous confondrons', 'vous confondrez', 'ils/elles confondront'],
            passé_compose: ['j\'ai confondu', 'tu as confondu', 'il/elle a confondu', 'nous avons confondu', 'vous avez confondu', 'ils/elles ont confondu'],
            conditionnel_present: ['je confondrais', 'tu confondrais', 'il/elle confondrait', 'nous confondrions', 'vous confondriez', 'ils/elles confondraient']
        }
    },
    correspondre: {
        tenses:{
            present: ['je corresponds', 'tu corresponds', 'il/elle correspond', 'nous correspondons', 'vous correspondez', 'ils/elles correspondent'],
            imparfait: ['je correspondais', 'tu correspondais', 'il/elle correspondait', 'nous correspondions', 'vous correspondiez', 'ils/elles correspondaient'],
            futur: ['je correspondrai', 'tu correspondras', 'il/elle correspondra', 'nous correspondrons', 'vous correspondrez', 'ils/elles correspondront'],
            passé_compose: ['j\'ai correspondu', 'tu as correspondu', 'il/elle a correspondu', 'nous avons correspondu', 'vous avez correspondu', 'ils/elles ont correspondu'],
            conditionnel_present: ['je correspondrais', 'tu correspondrais', 'il/elle correspondrait', 'nous correspondrions', 'vous correspondriez', 'ils/elles correspondraient']
        }
    },

    défendre: {
        tenses:{
            present: ['je défends', 'tu défends', 'il/elle défend', 'nous défendons', 'vous défendez', 'ils/elles défendent'],
            imparfait: ['je défendais', 'tu défendais', 'il/elle défendait', 'nous défendions', 'vous défendiez', 'ils/elles défendaient'],
            futur: ['je défendrai', 'tu défendras', 'il/elle défendra', 'nous défendrons', 'vous défendrez', 'ils/elles défendront'],
            passé_compose: ['j\'ai défendu', 'tu as défendu', 'il/elle a défendu', 'nous avons défendu', 'vous avez défendu', 'ils/elles ont défendu'],
            conditionnel_present: ['je défendrais', 'tu défendrais', 'il/elle défendrait', 'nous défendrions', 'vous défendriez', 'ils/elles défendraient']
        }
    },
    descendre: {
        tenses:{
            present: ['je descends', 'tu descends', 'il/elle descend', 'nous descendons', 'vous descendez', 'ils/elles descendent'],
            imparfait: ['je descendais', 'tu descendais', 'il/elle descendait', 'nous descendions', 'vous descendiez', 'ils/elles descendaient'],
            futur: ['je descendrai', 'tu descendras', 'il/elle descendra', 'nous descendrons', 'vous descendrez', 'ils/elles descendront'],
            passé_compose: ['je suis descendu(e)', 'tu es descendu(e)', 'il/elle est descendu(e)', 'nous sommes descendu(e)s', 'vous êtes descendu(e)(s)', 'ils/elles sont descendu(e)s'],
            conditionnel_present: ['je descendrais', 'tu descendrais', 'il/elle descendrait', 'nous descendrions', 'vous descendriez', 'ils/elles descendraient']
        }
    },

    perdre: {
        tenses:{
            present: ['je perds', 'tu perds', 'il/elle perd', 'nous perdons', 'vous perdez', 'ils/elles perdent'],
            imparfait: ['je perdais', 'tu perdais', 'il/elle perdait', 'nous perdions', 'vous perdiez', 'ils/elles perdaient'],
            futur: ['je perdrai', 'tu perdras', 'il/elle perdra', 'nous perdrons', 'vous perdrez', 'ils/elles perdront'],
            passé_compose: ['j\'ai perdu', 'tu as perdu', 'il/elle a perdu', 'nous avons perdu', 'vous avez perdu', 'ils/elles ont perdu'],
            conditionnel_present: ['je perdrais', 'tu perdrais', 'il/elle perdrait', 'nous perdrions', 'vous perdriez', 'ils/elles perdraient']
        }
    },
    prétendre: {
        tenses:{
            present: ['je prétends', 'tu prétends', 'il/elle prétend', 'nous prétendons', 'vous prétendez', 'ils/elles prétendent'],
            imparfait: ['je prétendais', 'tu prétendais', 'il/elle prétendait', 'nous prétendions', 'vous prétendiez', 'ils/elles prétendaient'],
            futur: ['je prétendrai', 'tu prétendras', 'il/elle prétendra', 'nous prétendrons', 'vous prétendrez', 'ils/elles prétendront'],
            passé_compose: ['j\'ai prétendu', 'tu as prétendu', 'il/elle a prétendu', 'nous avons prétendu', 'vous avez prétendu', 'ils/elles ont prétendu'],
            conditionnel_present: ['je prétendrais', 'tu prétendrais', 'il/elle prétendrait', 'nous prétendrions', 'vous prétendriez', 'ils/elles prétendraient']
        }
    },

    rendre: {
        tenses:{
            present: ['je rends', 'tu rends', 'il/elle rend', 'nous rendons', 'vous rendez', 'ils/elles rendent'],
            imparfait: ['je rendais', 'tu rendais', 'il/elle rendait', 'nous rendions', 'vous rendiez', 'ils/elles rendaient'],
            futur: ['je rendrai', 'tu rendras', 'il/elle rendra', 'nous rendrons', 'vous rendrez', 'ils/elles rendront'],
            passé_compose: ['j\'ai rendu', 'tu as rendu', 'il/elle a rendu', 'nous avons rendu', 'vous avez rendu', 'ils/elles ont rendu'],
            conditionnel_present: ['je rendrais', 'tu rendrais', 'il/elle rendrait', 'nous rendrions', 'vous rendriez', 'ils/elles rendraient']
        }
    },
    répondre: {
        tenses:{
            present: ['je réponds', 'tu réponds', 'il/elle répond', 'nous répondons', 'vous répondez', 'ils/elles répondent'],
            imparfait: ['je répondais', 'tu répondais', 'il/elle répondait', 'nous répondions', 'vous répondiez', 'ils/elles répondaient'],
            futur: ['je répondrai', 'tu répondras', 'il/elle répondra', 'nous répondrons', 'vous répondrez', 'ils/elles répondront'],
            passé_compose: ['j\'ai répondu', 'tu as répondu', 'il/elle a répondu', 'nous avons répondu', 'vous avez répondu', 'ils/elles ont répondu'],
            conditionnel_present: ['je répondrais', 'tu répondrais', 'il/elle répondrait', 'nous répondrions', 'vous répondriez', 'ils/elles répondraient']
        }
    },
    vendre: {
        tenses:{
            present: ['je vends', 'tu vends', 'il/elle vend', 'nous vendons', 'vous vendez', 'ils/elles vendent'],
            imparfait: ['je vendais', 'tu vendais', 'il/elle vendait', 'nous vendions', 'vous vendiez', 'ils/elles vendaient'],
            futur: ['je vendrai', 'tu vendras', 'il/elle vendra', 'nous vendrons', 'vous vendrez', 'ils/elles vendront'],
            passé_compose: ['j\'ai vendu', 'tu as vendu', 'il/elle a vendu', 'nous avons vendu', 'vous avez vendu', 'ils/elles ont vendu'],
            conditionnel_present: ['je vendrais', 'tu vendrais', 'il/elle vendrait', 'nous vendrions', 'vous vendriez', 'ils/elles vendraient']
        }
    },



    /*================================================================================================================================ */
    /* IR verbs  */
    /*================================================================================================================================ */

    bâtir: {
        tenses:{
            present: ['je bâtis', 'tu bâtis', 'il/elle bâtit', 'nous bâtissons', 'vous bâtissez', 'ils/elles bâtissent'],
            imparfait: ['je bâtissais', 'tu bâtissais', 'il/elle bâtissait', 'nous bâtissions', 'vous bâtissiez', 'ils/elles bâtissaient'],
            futur: ['je bâtirai', 'tu bâtiras', 'il/elle bâtira', 'nous bâtirons', 'vous bâtirez', 'ils/elles bâtiront'],
            passé_compose: ['j\'ai bâti', 'tu as bâti', 'il/elle a bâti', 'nous avons bâti', 'vous avez bâti', 'ils/elles ont bâti'],
            conditionnel_present: ['je bâtirais', 'tu bâtirais', 'il/elle bâtirait', 'nous bâtirions', 'vous bâtiriez', 'ils/elles bâtiraient']
        }
    },


    choisir: {
        tenses:{
            present: ['je choisis', 'tu choisis', 'il/elle choisit', 'nous choisissons', 'vous choisissez', 'ils/elles choisissent'],
            imparfait: ['je choisissais', 'tu choisissais', 'il/elle choisissait', 'nous choisissions', 'vous choisissiez', 'ils/elles choisissaient'],
            futur: ['je choisirai', 'tu choisiras', 'il/elle choisira', 'nous choisirons', 'vous choisirez', 'ils/elles choisiront'],
            passé_compose: ['j\'ai choisi', 'tu as choisi', 'il/elle a choisi', 'nous avons choisi', 'vous avez choisi', 'ils/elles ont choisi'],
            conditionnel_present: ['je choisirais', 'tu choisirais', 'il/elle choisirait', 'nous choisirions', 'vous choisiriez', 'ils/elles choisiraient']
        }
    },

    finir: {
        tenses:{
            present: ['je finis', 'tu finis', 'il/elle finit', 'nous finissons', 'vous finissez', 'ils/elles finissent'],
            imparfait: ['je finissais', 'tu finissais', 'il/elle finissait', 'nous finissions', 'vous finissiez', 'ils/elles finissaient'],
            futur: ['je finirai', 'tu finiras', 'il/elle finira', 'nous finirons', 'vous finirez', 'ils/elles finiront'],
            passé_compose: ['j\'ai fini', 'tu as fini', 'il/elle a fini', 'nous avons fini', 'vous avez fini', 'ils/elles ont fini'],
            conditionnel_present: ['je finirais', 'tu finirais', 'il/elle finirait', 'nous finirions', 'vous finiriez', 'ils/elles finiraient']
        }
    },

    grandir: {
        tenses:{
            present: ['je grandis', 'tu grandis', 'il/elle grandit', 'nous grandissons', 'vous grandissez', 'ils/elles grandissent'],
            imparfait: ['je grandissais', 'tu grandissais', 'il/elle grandissait', 'nous grandissions', 'vous grandissiez', 'ils/elles grandissaient'],
            futur: ['je grandirai', 'tu grandiras', 'il/elle grandira', 'nous grandirons', 'vous grandirez', 'ils/elles grandiront'],
            passé_compose: ['j\'ai grandi', 'tu as grandi', 'il/elle a grandi', 'nous avons grandi', 'vous avez grandi', 'ils/elles ont grandi'],
            conditionnel_present: ['je grandirais', 'tu grandirais', 'il/elle grandirait', 'nous grandirions', 'vous grandiriez', 'ils/elles grandiraient']
        }
    },   

    guérir: {
        tenses:{
            present: ['je guéris', 'tu guéris', 'il/elle guérit', 'nous guérissons', 'vous guérissez', 'ils/elles guérissent'],
            imparfait: ['je guérissais', 'tu guérissais', 'il/elle guérissait', 'nous guérissions', 'vous guérissiez', 'ils/elles guérissaient'],
            futur: ['je guérirai', 'tu guériras', 'il/elle guérira', 'nous guérirons', 'vous guérirez', 'ils/elles guériront'],
            passé_compose: ['j\'ai guéri', 'tu as guéri', 'il/elle a guéri', 'nous avons guéri', 'vous avez guéri', 'ils/elles ont guéri'],
            conditionnel_present: ['je guérirais', 'tu guérirais', 'il/elle guérirait', 'nous guéririons', 'vous guéririez', 'ils/elles guériraient']
        }
    },


    obéir: {
        tenses:{
            present: ['j\'obéis', 'tu obéis', 'il/elle obéit', 'nous obéissons', 'vous obéissez', 'ils/elles obéissent'],
            imparfait: ['j\'obéissais', 'tu obéissais', 'il/elle obéissait', 'nous obéissions', 'vous obéissiez', 'ils/elles obéissaient'],
            futur: ['j\'obéirai', 'tu obéiras', 'il/elle obéira', 'nous obéirons', 'vous obéirez', 'ils/elles obéiront'],
            passé_compose: ['j\'ai obéi', 'tu as obéi', 'il/elle a obéi', 'nous avons obéi', 'vous avez obéi', 'ils/elles ont obéi'],
            conditionnel_present: ['j\'obéirais', 'tu obéirais', 'il/elle obéirait', 'nous obéirions', 'vous obéiriez', 'ils/elles obéiraient']
        }
    },


    remplir: {
        tenses:{
            present: ['je remplis', 'tu remplis', 'il/elle remplit', 'nous remplissons', 'vous remplissez', 'ils/elles remplissent'],
            imparfait: ['je remplissais', 'tu remplissais', 'il/elle remplissait', 'nous remplissions', 'vous remplissiez', 'ils/elles remplissaient'],
            futur: ['je remplirai', 'tu rempliras', 'il/elle remplira', 'nous remplirons', 'vous remplirez', 'ils/elles rempliront'],
            passé_compose: ['j\'ai rempli', 'tu as rempli', 'il/elle a rempli', 'nous avons rempli', 'vous avez rempli', 'ils/elles ont rempli'],
            conditionnel_present: ['je remplirais', 'tu remplirais', 'il/elle remplirait', 'nous remplirions', 'vous rempliriez', 'ils/elles rempliraient']
        }
    },


    réussir: {
        tenses:{
            present: ['je réussis', 'tu réussis', 'il/elle réussit', 'nous réussissons', 'vous réussissez', 'ils/elles réussissent'],
            imparfait: ['je réussissais', 'tu réussissais', 'il/elle réussissait', 'nous réussissions', 'vous réussissiez', 'ils/elles réussissaient'],
            futur: ['je réussirai', 'tu réussiras', 'il/elle réussira', 'nous réussirons', 'vous réussirez', 'ils/elles réussiront'],
            passé_compose: ['j\'ai réussi', 'tu as réussi', 'il/elle a réussi', 'nous avons réussi', 'vous avez réussi', 'ils/elles ont réussi'],
            conditionnel_present: ['je réussirais', 'tu réussirais', 'il/elle réussirait', 'nous réussirions', 'vous réussiriez', 'ils/elles réussiraient']
        }
    },

    
    rougir: {
        tenses:{
            present: ['je rougis', 'tu rougis', 'il/elle rougit', 'nous rougissons', 'vous rougissez', 'ils/elles rougissent'],
            imparfait: ['je rougissais', 'tu rougissais', 'il/elle rougissait', 'nous rougissions', 'vous rougissiez', 'ils/elles rougissaient'],
            futur: ['je rougirai', 'tu rougiras', 'il/elle rougira', 'nous rougirons', 'vous rougirez', 'ils/elles rougiront'],
            passé_compose: ['j\'ai rougi', 'tu as rougi', 'il/elle a rougi', 'nous avons rougi', 'vous avez rougi', 'ils/elles ont rougi'],
            conditionnel_present: ['je rougirais', 'tu rougirais', 'il/elle rougirait', 'nous rougirions', 'vous rougiriez', 'ils/elles rougiraient']
        }
    },

    
    


    réfléchir: {
        tenses:{
            present: ['je réfléchis', 'tu réfléchis', 'il/elle réfléchit', 'nous réfléchissons', 'vous réfléchissez', 'ils/elles réfléchissent'],
            imparfait: ['je réfléchissais', 'tu réfléchissais', 'il/elle réfléchissait', 'nous réfléchissions', 'vous réfléchissiez', 'ils/elles réfléchissaient'],
            futur: ['je réfléchirai', 'tu réfléchiras', 'il/elle réfléchira', 'nous réfléchirons', 'vous réfléchirez', 'ils/elles réfléchiront'],
            passé_compose: ['j\'ai réfléchi', 'tu as réfléchi', 'il/elle a réfléchi', 'nous avons réfléchi', 'vous avez réfléchi', 'ils/elles ont réfléchi'],
            conditionnel_present: ['je réfléchirais', 'tu réfléchirais', 'il/elle réfléchirait', 'nous réfléchirions', 'vous réfléchiriez', 'ils/elles réfléchiraient']
        }
    }

};