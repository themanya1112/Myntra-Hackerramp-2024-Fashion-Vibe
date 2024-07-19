import React, { useState } from 'react';
import LinkComponent from './LinkComponent';



const Moodboard = () => {
    const[linkValue, setLinkValue]=useState('');
    return (

        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            {/*<base href="/dagk9q-w62a/">*/}
            <base href="." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Home</title>
            <meta name="description" content="" />
            <link
                rel="icon"
                href="https://mymood.my.canva.site/dagk9q-w62a/26387fa4f5b1e3f7b6217b27d79bf264.png"
                type="image/jpg/png"
                sizes="16x16"
            />
            <link
                rel="icon"
                href="https://mymood.my.canva.site/dagk9q-w62a/2d0b56e7e51cf11036ad8734bdb67e2d.png"
                type="image/jpg/png"
                sizes="32x32"
            />
            <link
                rel="apple-touch-icon"
                href="https://mymood.my.canva.site/dagk9q-w62a/725b756a69a7d4c235070e51acd85560.png"
                sizes="180x180"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n    :root {\n      --ffsd: 0px;\n      --1vw: calc((100vw - var(--sbw, 0px)) / 100);\n      --1vh: var(--inner1Vh, 1vh);\n    }\n    @media (prefers-reduced-motion: reduce) {\n      .animated {\n        animation: none !important;\n      }\n    }\n    html {\n      zoom: var(--rzf, 1);\n      font-size: max(calc(min(var(--1vw, 1vw), 13.66px) * var(--rfso, 1)), var(--minfs, 0px));\n      -webkit-text-size-adjust: 100%;\n      scroll-behavior: smooth;\n    }\n    body {\n      font-size: calc(1rem * var(--bfso, 1));\n    }\n    body,html,p,ul,ol,li {\n      margin: 0;\n      padding: 0;\n      font-synthesis: none;\n      font-kerning: none;\n      font-variant-ligatures: none;\n      font-feature-settings: "kern" 0, "calt" 0, "liga" 0, "clig" 0, "dlig" 0, "hlig" 0;\n      font-family: unset;\n      -webkit-font-smoothing: subpixel-antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      text-rendering: geometricprecision;\n      white-space: normal;\n    }\n    li {\n      text-align: unset;\n    }\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n    img {\n      -webkit-user-drag: none;\n      -moz-user-drag: none;\n      -o-user-drag: none;\n      -user-drag: none;\n      -webkit-touch-callout: none;\n    }\n    @media (max-width: 375px) {\n      #rItUGWPs8ibBSAW1 {\n        grid-area: 2 / 2 / 3 / 3;\n        position: relative;\n      }\n\n      #RxruqgVNJymUTFE4 {\n        grid-template-columns: 0 685.04010068%;\n        left: -292.52005034%;\n        grid-template-rows: 0 100%;\n      }\n      #i61w70PqedcMyVvx {\n        grid-area: 2 / 3 / 3 / 14;\n        position: relative;\n      }\n      #wPg3hZDoL7JNRClm {\n        grid-area: 4 / 4 / 5 / 15;\n        position: relative;\n      }\n      #sDa40usz1vhEFWj0 {\n        grid-area: 6 / 6 / 7 / 11;\n        position: relative;\n      }\n      #BcH1hder3QJEwaaA {\n        display: none;\n      }\n      #P5JSNnmrhUqhZk90 {\n        display: none;\n      }\n      #zZa0R1q2bTkVvXso {\n        display: block;\n      }\n      #BQJWPr1HsOkmU70n {\n        grid-area: 2 / 2 / 7 / 7;\n        position: relative;\n      }\n      #UvlMIhIwnVOUzcia {\n        font-size: calc(11.22058349em - var(--ffsd));\n      }\n      #tQlgWxaADLlje0wO {\n        --first-font-size: 11.22058349em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #oRsZKmbWcBeh9ckG {\n        min-width: 78.8rem;\n      }\n      #wq1yK1zuUpdF41NZ {\n        grid-area: 3 / 3 / 5 / 6;\n        position: relative;\n      }\n      #cXfD6z2QnhHQhXcy {\n        font-size: calc(3.45110863em - var(--ffsd));\n      }\n      #eBngzsOPc7mqkdwt {\n        --first-font-size: 3.45110863em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #ABggwUEeea3JPbtt {\n        min-width: 26.64422663rem;\n      }\n      #RFgBa0SllIwjD92d {\n        grid-area: 4 / 4 / 6 / 5;\n        position: relative;\n      }\n      #SPyrnE8aRN6nEuvD {\n        grid-area: 8 / 2 / 9 / 17;\n        grid-template-columns: 0 6.4rem 26.07788668rem 26.5108933rem 26.07788668rem 6.4rem;\n        grid-template-rows: 0 minmax(4.21414386rem, max-content) minmax(12.7232565rem, max-content) minmax(0.74034793rem, max-content) minmax(3.37610882rem, max-content) minmax(4.21414386rem, max-content);\n      }\n      #DE6u2rzwWbHhYzT3 {\n        grid-area: 8 / 2 / 9 / 17;\n        position: relative;\n      }\n      #AlI8CcRvVZHOvAA8 {\n        grid-area: 10 / 5 / 11 / 16;\n        position: relative;\n      }\n      #lNPofBg1H3NNr0xN {\n        grid-area: 12 / 7 / 13 / 12;\n        position: relative;\n      }\n      #SQXdWcpO2La6BDEz {\n        grid-area: 14 / 8 / 16 / 9;\n        position: relative;\n      }\n      #p3yu918HsKvHLIGh {\n        grid-area: 15 / 10 / 17 / 13;\n        position: relative;\n      }\n      #RQt0HLPf71p8Qa3d {\n        grid-template-columns: 4.26666667rem 12.39230158rem 0 0 2.73922675rem 0 0 29.43152265rem 2.3405647rem 29.43152265rem 0 0 2.73922675rem 0 0 12.39230158rem 4.26666667rem;\n        grid-template-rows: minmax(3.65980236rem, max-content) minmax(45.17196856rem, max-content) minmax(2.70375073rem, max-content) minmax(45.17196856rem, max-content) minmax(6.4rem, max-content) minmax(93.04768784rem, max-content) minmax(2.70933333rem, max-content) minmax(25.26800098rem, max-content) minmax(2.88995556rem, max-content) minmax(74.03236316rem, max-content) minmax(6.4rem, max-content) minmax(41.42895902rem, max-content) minmax(2.96041352rem, max-content) 0 minmax(29.64299062rem, max-content) 0 minmax(3.65980236rem, max-content);\n      }\n      #LhibCVgW6ZNgHFY5 {\n        min-height: calc(100 * var(--1vh, 1vh));\n      }\n    }\n    @media (min-width: 375.05px) and (max-width: 480px) {\n      #rItUGWPs8ibBSAW1 {\n        grid-area: 2 / 2 / 3 / 3;\n        position: relative;\n      }\n      #RxruqgVNJymUTFE4 {\n        grid-template-columns: 0 543.51636046%;\n        left: -221.75818023%;\n        grid-template-rows: 0 100%;\n      }\n      #i61w70PqedcMyVvx {\n        grid-area: 2 / 3 / 3 / 14;\n        position: relative;\n      }\n      #wPg3hZDoL7JNRClm {\n        grid-area: 4 / 4 / 5 / 15;\n        position: relative;\n      }\n      #sDa40usz1vhEFWj0 {\n        grid-area: 6 / 6 / 7 / 11;\n        position: relative;\n      }\n      #BcH1hder3QJEwaaA {\n        display: none;\n      }\n      #P5JSNnmrhUqhZk90 {\n        display: block;\n      }\n      #zZa0R1q2bTkVvXso {\n        display: none;\n      }\n      #BQJWPr1HsOkmU70n {\n        grid-area: 2 / 2 / 7 / 7;\n        position: relative;\n      }\n      #UvlMIhIwnVOUzcia {\n        font-size: calc(11.88621133em - var(--ffsd));\n      }\n      #tQlgWxaADLlje0wO {\n        --first-font-size: 11.88621133em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #oRsZKmbWcBeh9ckG {\n        min-width: 83.4375rem;\n      }\n      #wq1yK1zuUpdF41NZ {\n        grid-area: 3 / 3 / 5 / 6;\n        position: relative;\n      }\n      #cXfD6z2QnhHQhXcy {\n        font-size: calc(3.65583541em - var(--ffsd));\n      }\n      #eBngzsOPc7mqkdwt {\n        --first-font-size: 3.65583541em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #ABggwUEeea3JPbtt {\n        min-width: 28.18774008rem;\n      }\n      #RFgBa0SllIwjD92d {\n        grid-area: 4 / 4 / 6 / 5;\n        position: relative;\n      }\n      #SPyrnE8aRN6nEuvD {\n        grid-area: 8 / 2 / 9 / 17;\n        grid-template-columns: 0 5rem 27.62487996rem 28.08357341rem 27.62487996rem 5rem;\n        grid-template-rows: 0 minmax(3.29229989rem, max-content) minmax(13.47802595rem, max-content) minmax(0.78426688rem, max-content) minmax(3.57638646rem, max-content) minmax(3.29229989rem, max-content);\n      }\n      #DE6u2rzwWbHhYzT3 {\n        grid-area: 8 / 2 / 9 / 17;\n        position: relative;\n      }\n      #AlI8CcRvVZHOvAA8 {\n        grid-area: 10 / 5 / 11 / 16;\n        position: relative;\n      }\n      #lNPofBg1H3NNr0xN {\n        grid-area: 12 / 7 / 13 / 12;\n        position: relative;\n      }\n      #SQXdWcpO2La6BDEz {\n        grid-area: 14 / 8 / 16 / 9;\n        position: relative;\n      }\n      #p3yu918HsKvHLIGh {\n        grid-area: 15 / 10 / 17 / 13;\n        position: relative;\n      }\n      #RQt0HLPf71p8Qa3d {\n        grid-template-columns: 3.33333333rem 20.61898561rem 0 0 2.1400209rem 0 0 22.99337707rem 1.82856617rem 22.99337707rem 0 0 2.1400209rem 0 0 20.61898561rem 3.33333333rem;\n        grid-template-rows: minmax(2.85922059rem, max-content) minmax(35.29060043rem, max-content) minmax(2.11230526rem, max-content) minmax(35.29060043rem, max-content) minmax(5rem, max-content) minmax(72.69350612rem, max-content) minmax(2.11666667rem, max-content) minmax(24.42327907rem, max-content) minmax(2.25777778rem, max-content) minmax(57.83778371rem, max-content) minmax(5rem, max-content) minmax(32.36637423rem, max-content) minmax(2.31282306rem, max-content) 0 minmax(23.15858642rem, max-content) 0 minmax(2.85922059rem, max-content);\n      }\n      #LhibCVgW6ZNgHFY5 {\n        min-height: calc(100 * var(--1vh, 1vh));\n      }\n    }\n    @media (min-width: 480.05px) and (max-width: 768px) {\n      #rItUGWPs8ibBSAW1 {\n        grid-area: 2 / 2 / 3 / 3;\n        position: relative;\n      }\n      #RxruqgVNJymUTFE4 {\n        grid-template-columns: 0 185.27560764%;\n        left: -42.63780382%;\n        grid-template-rows: 0 100%;\n      }\n      #i61w70PqedcMyVvx {\n        grid-area: 2 / 2 / 4 / 6;\n        position: relative;\n      }\n      #wPg3hZDoL7JNRClm {\n        grid-area: 5 / 3 / 6 / 7;\n        position: relative;\n      }\n      #sDa40usz1vhEFWj0 {\n        grid-area: 3 / 9 / 7 / 14;\n        position: relative;\n      }\n      #BcH1hder3QJEwaaA {\n        display: block;\n      }\n      #P5JSNnmrhUqhZk90 {\n        display: none;\n      }\n      #zZa0R1q2bTkVvXso {\n        display: none;\n      }\n      #BQJWPr1HsOkmU70n {\n        grid-area: 2 / 2 / 7 / 7;\n        position: relative;\n      }\n      #UvlMIhIwnVOUzcia {\n        font-size: calc(7.80400632em - var(--ffsd));\n      }\n      #tQlgWxaADLlje0wO {\n        --first-font-size: 7.80400632em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #oRsZKmbWcBeh9ckG {\n        min-width: 54.77840533rem;\n      }\n      #wq1yK1zuUpdF41NZ {\n        grid-area: 3 / 3 / 5 / 6;\n        position: relative;\n      }\n      #cXfD6z2QnhHQhXcy {\n        font-size: calc(2.40027388em - var(--ffsd));\n      }\n      #eBngzsOPc7mqkdwt {\n        --first-font-size: 2.40027388em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #ABggwUEeea3JPbtt {\n        min-width: 18.50364428rem;\n      }\n      #RFgBa0SllIwjD92d {\n        grid-area: 4 / 4 / 6 / 5;\n        position: relative;\n      }\n      #SPyrnE8aRN6nEuvD {\n        grid-area: 8 / 4 / 9 / 15;\n        grid-template-columns: 0 4.56176434rem 18.13738052rem 18.43854012rem 18.13738052rem 4.56176434rem;\n        grid-template-rows: 0 minmax(0.37261799rem, max-content) minmax(8.84912751rem, max-content) minmax(0.51491796rem, max-content) minmax(2.34811091rem, max-content) minmax(0.61775688rem, max-content);\n      }\n      #DE6u2rzwWbHhYzT3 {\n        grid-area: 8 / 4 / 9 / 15;\n        position: relative;\n      }\n      #AlI8CcRvVZHOvAA8 {\n        grid-area: 10 / 5 / 15 / 8;\n        position: relative;\n      }\n      #lNPofBg1H3NNr0xN {\n        grid-area: 11 / 10 / 12 / 16;\n        position: relative;\n      }\n      #SQXdWcpO2La6BDEz {\n        grid-area: 13 / 11 / 16 / 12;\n        position: relative;\n      }\n      #p3yu918HsKvHLIGh {\n        grid-area: 14 / 13 / 17 / 17;\n        position: relative;\n      }\n      #RQt0HLPf71p8Qa3d {\n        grid-template-columns: 18.08158508rem 0 0 0 32.55960132rem 0 0 1.39265332rem 0 0 14.37086067rem 1.14285386rem 14.37086067rem 0 0 0 18.08158508rem;\n        grid-template-rows: minmax(3.57402574rem, max-content) 0 minmax(22.05662527rem, max-content) minmax(1.32019078rem, max-content) minmax(22.05662527rem, max-content) 0 minmax(1.32291667rem, max-content) minmax(12.70253125rem, max-content) minmax(1.41111111rem, max-content) 0 minmax(20.2289839rem, max-content) minmax(1.44551441rem, max-content) 0 minmax(14.47411651rem, max-content) 0 0 minmax(3.57402574rem, max-content);\n      }\n      #LhibCVgW6ZNgHFY5 {\n        min-height: calc(100 * var(--1vh, 1vh));\n      }\n    }\n    @media (min-width: 768.05px) and (max-width: 1024px) {\n      #rItUGWPs8ibBSAW1 {\n        grid-area: 2 / 2 / 3 / 3;\n        position: relative;\n      }\n      #RxruqgVNJymUTFE4 {\n        grid-template-columns: 0 138.95670573%;\n        left: -19.47835286%;\n        grid-template-rows: 0 100%;\n      }\n      #i61w70PqedcMyVvx {\n        grid-area: 2 / 2 / 4 / 6;\n        position: relative;\n      }\n      #wPg3hZDoL7JNRClm {\n        grid-area: 5 / 3 / 6 / 7;\n        position: relative;\n      }\n      #sDa40usz1vhEFWj0 {\n        grid-area: 3 / 9 / 7 / 14;\n        position: relative;\n      }\n      #BcH1hder3QJEwaaA {\n        display: block;\n      }\n      #P5JSNnmrhUqhZk90 {\n        display: none;\n      }\n      #zZa0R1q2bTkVvXso {\n        display: none;\n      }\n      #BQJWPr1HsOkmU70n {\n        grid-area: 2 / 2 / 7 / 7;\n        position: relative;\n      }\n      #UvlMIhIwnVOUzcia {\n        font-size: calc(5.85300474em - var(--ffsd));\n      }\n      #tQlgWxaADLlje0wO {\n        --first-font-size: 5.85300474em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #oRsZKmbWcBeh9ckG {\n        min-width: 41.083804rem;\n      }\n      #wq1yK1zuUpdF41NZ {\n        grid-area: 3 / 3 / 5 / 6;\n        position: relative;\n      }\n      #cXfD6z2QnhHQhXcy {\n        font-size: calc(1.80020541em - var(--ffsd));\n      }\n      #eBngzsOPc7mqkdwt {\n        --first-font-size: 1.80020541em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #ABggwUEeea3JPbtt {\n        min-width: 13.87773321rem;\n      }\n      #RFgBa0SllIwjD92d {\n        grid-area: 4 / 4 / 6 / 5;\n        position: relative;\n      }\n      #SPyrnE8aRN6nEuvD {\n        grid-area: 8 / 4 / 9 / 15;\n        grid-template-columns: 0 3.42132325rem 13.60303539rem 13.82890509rem 13.60303539rem 3.42132325rem;\n        grid-template-rows: 0 minmax(0.27946349rem, max-content) minmax(6.63684563rem, max-content) minmax(0.38618847rem, max-content) minmax(1.76108318rem, max-content) minmax(0.46331766rem, max-content);\n      }\n      #DE6u2rzwWbHhYzT3 {\n        grid-area: 8 / 4 / 9 / 15;\n        position: relative;\n      }\n      #AlI8CcRvVZHOvAA8 {\n        grid-area: 10 / 5 / 15 / 8;\n        position: relative;\n      }\n      #lNPofBg1H3NNr0xN {\n        grid-area: 11 / 10 / 12 / 16;\n        position: relative;\n      }\n      #SQXdWcpO2La6BDEz {\n        grid-area: 13 / 11 / 16 / 12;\n        position: relative;\n      }\n      #p3yu918HsKvHLIGh {\n        grid-area: 14 / 13 / 17 / 17;\n        position: relative;\n      }\n      #RQt0HLPf71p8Qa3d {\n        grid-template-columns: 26.06118881rem 0 0 0 24.41970099rem 0 0 1.04448999rem 0 0 10.7781455rem 0.85714039rem 10.7781455rem 0 0 0 26.06118881rem;\n        grid-template-rows: minmax(2.68051931rem, max-content) 0 minmax(16.54246895rem, max-content) minmax(0.99014309rem, max-content) minmax(16.54246895rem, max-content) 0 minmax(0.9921875rem, max-content) minmax(9.52689844rem, max-content) minmax(1.05833333rem, max-content) 0 minmax(15.17173792rem, max-content) minmax(1.08413581rem, max-content) 0 minmax(10.85558738rem, max-content) 0 0 minmax(2.68051931rem, max-content);\n      }\n      #LhibCVgW6ZNgHFY5 {\n        min-height: calc(100 * var(--1vh, 1vh));\n      }\n    }\n    @media (min-width: 1024.05px) {\n      #rItUGWPs8ibBSAW1 {\n        grid-area: 2 / 2 / 3 / 3;\n        position: relative;\n      }\n      #RxruqgVNJymUTFE4 {\n        grid-template-columns: 0 100%;\n        grid-template-rows: 0 100%;\n      }\n      #i61w70PqedcMyVvx {\n        grid-area: 2 / 2 / 4 / 6;\n        position: relative;\n      }\n      #wPg3hZDoL7JNRClm {\n        grid-area: 5 / 3 / 6 / 7;\n        position: relative;\n      }\n      #sDa40usz1vhEFWj0 {\n        grid-area: 3 / 9 / 7 / 14;\n        position: relative;\n      }\n      #BcH1hder3QJEwaaA {\n        display: block;\n      }\n      #P5JSNnmrhUqhZk90 {\n        display: none;\n      }\n      #zZa0R1q2bTkVvXso {\n        display: none;\n      }\n      #BQJWPr1HsOkmU70n {\n        grid-area: 2 / 2 / 7 / 7;\n        position: relative;\n      }\n      #UvlMIhIwnVOUzcia {\n        font-size: calc(4.38761117em - var(--ffsd));\n      }\n      #tQlgWxaADLlje0wO {\n        --first-font-size: 4.38761117em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #oRsZKmbWcBeh9ckG {\n        min-width: 30.797815rem;\n      }\n      #wq1yK1zuUpdF41NZ {\n        grid-area: 3 / 3 / 5 / 6;\n        position: relative;\n      }\n      #cXfD6z2QnhHQhXcy {\n        font-size: calc(1.34949513em - var(--ffsd));\n      }\n      #eBngzsOPc7mqkdwt {\n        --first-font-size: 1.34949513em;\n        --last-font-size: var(--first-font-size);\n        margin-top: calc(var(--first-font-size) * -0.1);\n        margin-bottom: calc(var(--last-font-size) * -0.1);\n      }\n      #ABggwUEeea3JPbtt {\n        min-width: 10.40322021rem;\n      }\n      #RFgBa0SllIwjD92d {\n        grid-area: 4 / 4 / 6 / 5;\n        position: relative;\n      }\n      #SPyrnE8aRN6nEuvD {\n        grid-area: 8 / 4 / 9 / 15;\n        grid-template-columns: 0 2.56474013rem 10.19729739rem 10.36661699rem 10.19729739rem 2.56474013rem;\n        grid-template-rows: 0 minmax(0.20949533rem, max-content) minmax(4.97520493rem, max-content) minmax(0.28949999rem, max-content) minmax(1.32016777rem, max-content) minmax(0.34731865rem, max-content);\n      }\n      #DE6u2rzwWbHhYzT3 {\n        grid-area: 8 / 4 / 9 / 15;\n        position: relative;\n      }\n      #AlI8CcRvVZHOvAA8 {\n        grid-area: 10 / 5 / 15 / 8;\n        position: relative;\n      }\n      #lNPofBg1H3NNr0xN {\n        grid-area: 11 / 10 / 12 / 16;\n        position: relative;\n      }\n      #SQXdWcpO2La6BDEz {\n        grid-area: 13 / 11 / 16 / 12;\n        position: relative;\n      }\n      #p3yu918HsKvHLIGh {\n        grid-area: 14 / 13 / 17 / 17;\n        position: relative;\n      }\n      #RQt0HLPf71p8Qa3d {\n        grid-template-columns: 32.05465398rem 0 0 0 18.30583734rem 0 0 0.78298518rem 0 0 8.07966398rem 0.64254155rem 8.07966398rem 0 0 0 32.05465398rem;\n        grid-template-rows: minmax(0.83810525rem, max-content) 0 minmax(12.40079664rem, max-content) minmax(0.74224489rem, max-content) minmax(12.40079664rem, max-content) 0 minmax(0.74377745rem, max-content) minmax(7.14168668rem, max-content) minmax(0.79336262rem, max-content) 0 minmax(11.3732501rem, max-content) minmax(0.81270503rem, max-content) 0 minmax(8.13771704rem, max-content) 0 0 minmax(0.83810525rem, max-content);\n      }\n      #LhibCVgW6ZNgHFY5 {\n        min-height: calc(100 * var(--1vh, 1vh));\n      }\n    }\n  '
                }}
            />
            <div id="root">
                <a id="page-1" aria-hidden="true" style={{ visibility: "hidden" }} />
                <section
                    id="LhibCVgW6ZNgHFY5"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "auto 100rem auto",
                        zIndex: 0
                    }}
                >
                    <div
                        id="RxruqgVNJymUTFE4"
                        style={{
                            gridArea: "1 / 1 / 2 / 4",
                            display: "grid",
                            position: "absolute",
                            minHeight: "100%",
                            minWidth: "100%"
                        }}
                    >
                        <div id="rItUGWPs8ibBSAW1" style={{ zIndex: 0 }}>
                            <div
                                id="reiFppvlggLxNGqC"
                                style={{
                                    boxSizing: "border-box",
                                    width: "100%",
                                    height: "100%",
                                    transform: "rotate(0deg)"
                                }}
                            >
                                <div
                                    id="KUSexoEan0X2BwcA"
                                    style={{ width: "100%", height: "100%", opacity: 1.0 }}
                                >
                                    <div
                                        id="uxZol8bXR3mBGLhH"
                                        style={{
                                            backgroundColor: "#e6e6e6",
                                            opacity: 1.0,
                                            transform: "scale(1, 1)",
                                            width: "100%",
                                            height: "100%",
                                            overflow: "hidden",
                                            position: "relative"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="RQt0HLPf71p8Qa3d"
                        style={{
                            display: "grid",
                            position: "relative",
                            gridArea: "1 / 2 / 2 / 3"
                        }}
                    >
                        <div id="i61w70PqedcMyVvx" style={{ zIndex: 6 }}>
                            <div
                                id="SZqTehN4oZbsCCIw"
                                style={{ paddingTop: "67.74230758%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="f272P0W97lBgZQcq"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="Pou6mM6yfmoDPH2t"
                                        viewBox="0 0 142.8443 96.766"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="UaPz0bvOTkqErHPW" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="yqUAqg7bn11Ie92m"
                                                style={{ width: "142.8443px", height: "96.766px" }}
                                            >
                                                <div
                                                    id="XDOU4geSgcag6Q6W"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L142.84427579,0 L142.84427579,96.76600867 L0,96.76600867 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="NhfiUZa3Qzef03LS"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "71.5px 48.5px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                        <LinkComponent csvFilePath={'links/image_links.csv'} imageName="1.jpg">
                                                            <img
                                                                src="images/1.jpg"
                                                                alt="Pampas on Brown and Green Grass Near Trees"
                                                                loading="lazy"
                                                                srcSet="images/1.jpg 615w, images/1.jpg 922w"
                                                                sizes="(max-width: 375px) 66.6820522vw, (min-width: 375.05px) and (max-width: 480px) 52.09535328vw, (min-width: 480.05px) and (max-width: 768px) 32.5595958vw, (min-width: 768.05px) and (max-width: 1024px) 24.41969685vw, (min-width: 1024.05px) 18.30583424vw"
                                                                style={{
                                                                    transform: "translate(0px, -46.84651286px) rotate(0deg)",
                                                                    transformOrigin: "71.4221379px 95.2295172px",
                                                                    width: "142.84427579px",
                                                                    height: "190.45903439px",
                                                                    display: "block",
                                                                    opacity: 1.0,
                                                                    objectFit: "fill"
                                                                }}
                                                            />
                                                        </LinkComponent>                                                   
                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="wPg3hZDoL7JNRClm" style={{ zIndex: 5 }}>
                            <div
                                id="oSZF6ZfNq0U4Ygkw"
                                style={{ paddingTop: "67.74230758%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="JWgTNUddPDupP6M8"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="i1fQD5ngoBotxntY"
                                        viewBox="0 0 142.8443 96.766"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="gAdY1GUvhwJbgWCc" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="JhCgU3CEZZKC3sqZ"
                                                style={{ width: "142.8443px", height: "96.766px" }}
                                            >
                                                <div
                                                    id="wgG432G3dXREL7Vf"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L142.84427579,0 L142.84427579,96.76600867 L0,96.76600867 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="cDmRo7uvlmMAsFqO"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "71.5px 48.5px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                        <LinkComponent csvFilePath={'links/image_links.csv'} imageName="2.jpg">

                                                        <img
                                                            src="images/2.jpg"
                                                            alt="Hot Air Balloons Flying over Brown Mountain"
                                                            loading="lazy"
                                                            srcSet="images/2.jpg 807w, images/2.jpg 1210w"
                                                            sizes="(max-width: 375px) 66.6820522vw, (min-width: 375.05px) and (max-width: 480px) 52.09535328vw, (min-width: 480.05px) and (max-width: 768px) 32.5595958vw, (min-width: 768.05px) and (max-width: 1024px) 24.41969685vw, (min-width: 1024.05px) 18.30583424vw"
                                                            style={{
                                                                transform:
                                                                    "translate(0px, -5.18359909px) rotate(0deg)",
                                                                transformOrigin: "71.4221379px 53.56660342px",
                                                                width: "142.84427579px",
                                                                height: "107.13320685px",
                                                                display: "block",
                                                                opacity: 1.0,
                                                                objectFit: "fill"
                                                            }}
                                                        />
                                                     </LinkComponent>                                                   

                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="sDa40usz1vhEFWj0" style={{ zIndex: 2 }}>
                            <div
                                id="G77GZuqf5DUshvrt"
                                style={{ paddingTop: "152.02973786%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="EgDRePEmvpXPjrYn"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="S0dtoTK8zQ7ksm8N"
                                        viewBox="0 0 56.2533 85.5218"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="MPJH6Xu2fgl2u4EI" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="F6LSnk3CtIxxsJ03"
                                                style={{ width: "56.2533px", height: "85.5218px" }}
                                            >
                                                <div
                                                    id="KQGvIykTJHdP14M9"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L56.25331801,0 L56.25331801,85.52177191 L0,85.52177191 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="YHvzvlqQ7gYs1BEI"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "28.5px 43px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                <LinkComponent csvFilePath={'links/image_links.csv'} imageName="3.jpg">

                                                        <img
                                                            src="images/3.jpg"
                                                            alt="Brown Straw Hat, Glass Jars and an Open Book on a Picnic Blanket"
                                                            loading="lazy"
                                                            srcSet="images/3.jpg 605w, images/3.jpg 908w"
                                                            sizes="(max-width: 375px) 69.78578823vw, (min-width: 375.05px) and (max-width: 480px) 54.52014705vw, (min-width: 480.05px) and (max-width: 768px) 34.07509191vw, (min-width: 768.05px) and (max-width: 1024px) 25.55631893vw, (min-width: 1024.05px) 19.15788476vw"
                                                            style={{
                                                                transform:
                                                                    "translate(-3.94400546px, 0px) rotate(0deg)",
                                                                transformOrigin: "32.07066447px 42.76088596px",
                                                                width: "64.14132893px",
                                                                height: "85.52177191px",
                                                                display: "block",
                                                                opacity: 1.0,
                                                                objectFit: "fill"
                                                            }}
                                                        />
                                                    </LinkComponent>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="DE6u2rzwWbHhYzT3">
                            <div
                                id="SPyrnE8aRN6nEuvD"
                                style={{ display: "grid", position: "relative" }}
                            >
                                <div id="BQJWPr1HsOkmU70n" style={{ zIndex: 8 }}>
                                    <div
                                        id="JhwWmYPpOM1qzA9g"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                            height: "100%",
                                            transform: "rotate(0deg)"
                                        }}
                                    >
                                        <svg
                                            id="BcH1hder3QJEwaaA"
                                            viewBox="0 0 120.1634 23.9106"
                                            preserveAspectRatio="none"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                opacity: 1.0,
                                                overflow: "hidden",
                                                position: "absolute",
                                                top: "0%",
                                                left: "0%",
                                                background: 'url("data:image/png'
                                            }}
                                        >
                                            <g id="hL5Zdg7uMatwa8cZ" style={{ transform: "scale(1, 1)" }}>
                                                <foreignObject
                                                    id="NDyf8naRdrpT1dbl"
                                                    style={{ width: "120.1634px", height: "23.9106px" }}
                                                >
                                                    <div
                                                        id="uxQ5HPebpkGLHrHM"
                                                        style={{
                                                            clipPath:
                                                                'path("M0,0 L120.1634444,0 L120.1634444,23.91064706 L0,23.91064706 Z")'
                                                        }}
                                                    >
                                                        <div
                                                            id="IgfJ1yv5oVh59tay"
                                                            style={{
                                                                transform: "scale(1, 1)",
                                                                transformOrigin: "60.5px 12px",
                                                                animation: "auto ease 0s 1 normal none running none"
                                                            }}
                                                        >
                                                <LinkComponent csvFilePath={'links/image_links.csv'} imageName="4.jpg">

                                                            <img
                                                                src="images/4.jpg"
                                                                alt="Aesthetic"
                                                                loading="lazy"
                                                                srcSet="images/4.jpg 900w, images/4.jpg 1500w"
                                                                sizes="(max-width: 375px) 91.46670046vw, (min-width: 375.05px) and (max-width: 480px) 93.33336782vw, (min-width: 480.05px) and (max-width: 768px) 63.83685342vw, (min-width: 768.05px) and (max-width: 1024px) 47.87764007vw, (min-width: 1024.05px) 35.89070529vw"
                                                                style={{
                                                                    transform:
                                                                        "translate(0px, -68.1536394px) rotate(0deg)",
                                                                    transformOrigin: "60.0817222px 80.10896293px",
                                                                    width: "120.1634444px",
                                                                    height: "160.21792586px",
                                                                    display: "block",
                                                                    opacity: 1.0,
                                                                    objectFit: "fill"
                                                                }}
                                                            />
                                                        </LinkComponent>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                            </g>
                                        </svg>
                                        <svg
                                            id="P5JSNnmrhUqhZk90"
                                            viewBox="0 0 109.8039 28.7333"
                                            preserveAspectRatio="none"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                opacity: 1.0,
                                                overflow: "hidden",
                                                position: "absolute",
                                                top: "0%",
                                                left: "0%",
                                                background: 'url("data:image/png'
                                            }}
                                        >
                                            <g id="AXnku0YuKBGLqaxw" style={{ transform: "scale(1, 1)" }}>
                                                <foreignObject
                                                    id="BtIKaNIyyU5VDJeG"
                                                    style={{ width: "109.8039px", height: "28.7333px" }}
                                                >
                                                    <div
                                                        id="G7jevWPxFkdMamPS"
                                                        style={{
                                                            clipPath:
                                                                'path("M0,0 L109.80392157,0 L109.80392157,28.7332695 L0,28.7332695 Z")'
                                                        }}
                                                    >
                                                        <div
                                                            id="viPQGIaJHRoSPLUw"
                                                            style={{
                                                                transform: "scale(1, 1)",
                                                                transformOrigin: "55px 14.5px",
                                                                animation: "auto ease 0s 1 normal none running none"
                                                            }}
                                                        >
                                                <LinkComponent csvFilePath={'links/image_links.csv'} imageName="5.jpg">

                                                            <img
                                                                src="images/5.jpg"
                                                                alt="Aesthetic"
                                                                loading="lazy"
                                                                srcSet="images/5.jpg 900w, images/5.jpg 1500w"
                                                                sizes="(max-width: 375px) 100.09616885vw, (min-width: 375.05px) and (max-width: 480px) 102.1389478vw, (min-width: 480.05px) and (max-width: 768px) 69.85957104vw, (min-width: 768.05px) and (max-width: 1024px) 52.39467828vw, (min-width: 1024.05px) 39.27683057vw"
                                                                style={{
                                                                    transform:
                                                                        "translate(0px, -68.1536394px) rotate(0deg)",
                                                                    transformOrigin: "60.0817222px 80.10896293px",
                                                                    width: "120.1634444px",
                                                                    height: "160.21792586px",
                                                                    display: "block",
                                                                    opacity: 1.0,
                                                                    objectFit: "fill"
                                                                }}
                                                            />
                                                        </LinkComponent>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                            </g>
                                        </svg>
                                        <svg
                                            id="zZa0R1q2bTkVvXso"
                                            viewBox="0 0 84.0686 23.2243"
                                            preserveAspectRatio="none"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                opacity: 1.0,
                                                overflow: "hidden",
                                                position: "absolute",
                                                top: "0%",
                                                left: "0%",
                                                background: 'url("data:image/png'
                                            }}
                                        >
                                            <g id="Fghp1MdrlgKoNqjL" style={{ transform: "scale(1, 1)" }}>
                                                <foreignObject
                                                    id="ewBDPyCh7MIZuXak"
                                                    style={{ width: "84.0686px", height: "23.2243px" }}
                                                >
                                                    <div
                                                        id="pmIN1EIii37VCXw7"
                                                        style={{
                                                            clipPath:
                                                                'path("M0,0 L84.06862745,0 L84.06862745,23.2242656 L0,23.2242656 Z")'
                                                        }}
                                                    >
                                                        <div
                                                            id="J28MAabc0NEJgoWO"
                                                            style={{
                                                                transform: "scale(1, 1)",
                                                                transformOrigin: "42.5px 12px",
                                                                animation: "auto ease 0s 1 normal none running none"
                                                            }}
                                                        >
                                                <LinkComponent csvFilePath={'links/image_links.csv'} imageName="6.jpg">

                                                            <img
                                                                src="images/6.jpg"
                                                                alt="Aesthetic"
                                                                loading="lazy"
                                                                srcSet="images/6.jpg 900w, images/6.jpg 1500w"
                                                                sizes="(max-width: 375px) 130.7378702vw, (min-width: 375.05px) and (max-width: 480px) 133.40599vw, (min-width: 480.05px) and (max-width: 768px) 91.24516588vw, (min-width: 768.05px) and (max-width: 1024px) 68.43387441vw, (min-width: 1024.05px) 51.30035681vw"
                                                                style={{
                                                                    transform:
                                                                        "translate(0px, -68.1536394px) rotate(0deg)",
                                                                    transformOrigin: "60.0817222px 80.10896293px",
                                                                    width: "120.1634444px",
                                                                    height: "160.21792586px",
                                                                    display: "block",
                                                                    opacity: 1.0,
                                                                    objectFit: "fill"
                                                                }}
                                                            />
                                                    </LinkComponent>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div id="wq1yK1zuUpdF41NZ" style={{ zIndex: 9 }}>
                                    <div
                                        id="oRsZKmbWcBeh9ckG"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                            height: "100%",
                                            transform: "rotate(0deg)"
                                        }}
                                    >
                                        <div
                                            id="tQlgWxaADLlje0wO"
                                            style={{
                                                opacity: 1.0,
                                                display: "flex",
                                                boxSizing: "border-box",
                                                flexDirection: "column",
                                                justifyContent: "flex-start",
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        >
                                            <p
                                                id="UvlMIhIwnVOUzcia"
                                                style={{
                                                    color: "#e6e6e6",
                                                    fontFamily: "YAD1aYG82rc-0",
                                                    lineHeight: "1.38483892em",
                                                    textAlign: "center",
                                                    textTransform: "uppercase"
                                                }}
                                            >
                                                <span id="aB43Mj3e0dZjYp6t" style={{ color: "#e6e6e6" }}>
                                                    moodboard
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="RFgBa0SllIwjD92d" style={{ zIndex: 10 }}>
                                    <div
                                        id="ABggwUEeea3JPbtt"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                            height: "100%",
                                            transform: "rotate(0deg)"
                                        }}
                                    >
                                        <div
                                            id="eBngzsOPc7mqkdwt"
                                            style={{
                                                opacity: 1.0,
                                                display: "flex",
                                                boxSizing: "border-box",
                                                flexDirection: "column",
                                                justifyContent: "flex-start",
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        >
                                            <p
                                                id="cXfD6z2QnhHQhXcy"
                                                style={{
                                                    color: "#e6e6e6",
                                                    fontFamily: "YAFdtQi73Xs-0",
                                                    lineHeight: "1.35618204em",
                                                    textAlign: "center",
                                                    textTransform: "uppercase"
                                                }}
                                            >
                                                <span
                                                    id="mU8oOyELNlspLhil"
                                                    style={{ color: "#e6e6e6", fontWeight: 700 }}
                                                >
                                                    Of the day
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="AlI8CcRvVZHOvAA8" style={{ zIndex: 1 }}>
                            <div
                                id="YG9v7yez7K9NHaAE"
                                style={{ paddingTop: "111.02290372%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="IIOwt0tAMx9OyJRx"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="l9ek8lKpdYwUA8MZ"
                                        viewBox="0 0 61.2887 68.0445"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="TfDibTOUlZNRjUeu" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="pCB7RLV1GsVQsgc0"
                                                style={{ width: "61.2887px", height: "68.0445px" }}
                                            >
                                                <div
                                                    id="UjFoTopzQlN8S9KQ"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L61.2886613,0 L61.2886613,68.04445143 L0,68.04445143 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="K5dGeCk8hliTmUWH"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "31px 34.5px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                <LinkComponent csvFilePath={'links/image_links.csv'} imageName="7.jpg">

                                                        <img
                                                            src="images/7.jpg"
                                                            alt="Cup of Coffee on Brown Wooden Table"
                                                            loading="lazy"
                                                            style={{
                                                                transform:
                                                                    "translate(0px, -13.35089616px) rotate(0deg)",
                                                                transformOrigin: "30.64433065px 40.85910754px",
                                                                width: "61.2886613px",
                                                                height: "81.71821507px",
                                                                display: "block",
                                                                opacity: 1.0,
                                                                objectFit: "fill"
                                                            }}
                                                        />
                                                    </LinkComponent>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="lNPofBg1H3NNr0xN" style={{ zIndex: 3 }}>
                            <div
                                id="dcezjvjfM7P4dgXv"
                                style={{ paddingTop: "67.69038463%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="d6ZHyrSTZwH95bjS"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="M1Mlm3iCSaGKOJBv"
                                        viewBox="0 0 56.2533 38.0781"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="SCdIZkejVNOUNNUW" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="frqQLYGbNDdldv4T"
                                                style={{ width: "56.2533px", height: "38.0781px" }}
                                            >
                                                <div
                                                    id="gYmzTLEdzIVyL7pl"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L56.25331801,0 L56.25331801,38.07808733 L0,38.07808733 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="VuSntqE2y59tgyBH"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "28.5px 19.5px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                <LinkComponent csvFilePath={'links/image_links.csv'} imageName="8.jpg">

                                                        <img
                                                            src="images/8.jpg"
                                                            alt="Girl in White Long Sleeve Dress Standing on Brown Grass Field"
                                                            loading="lazy"
                                                            style={{
                                                                transform:
                                                                    "translate(0px, -37.83386233px) rotate(0deg)",
                                                                transformOrigin: "28.12665901px 42.21637374px",
                                                                width: "56.25331801px",
                                                                height: "84.43274749px",
                                                                display: "block",
                                                                opacity: 1.0,
                                                                objectFit: "fill"
                                                            }}
                                                        />
                                                    </LinkComponent>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="SQXdWcpO2La6BDEz" style={{ zIndex: 4 }}>
                            <div
                                id="Jn8xKKqkIu130mSW"
                                style={{ paddingTop: "100.71850842%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="fuWerFMPE3DDYhCk"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="VL04DCIwfIUh1YX5"
                                        viewBox="0 0 64.0 64.4598"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="ZnKtdFxEOOX5XOQ4" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="uZhG4InPsLFzuU96"
                                                style={{ width: 64, height: "64.4598px" }}
                                            >
                                                <div
                                                    id="KWNtQrhv0AJL3BVN"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L64,0 L64,64.45984539 L0,64.45984539 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="zxzuqPuT5Ue4fg6Q"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "32px 32.5px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                    <LinkComponent csvFilePath={'links/image_links.csv'} imageName="9.jpg">
                                                        <img
                                                            src="images/9.jpg"
                                                            alt="Hat and Folded Clothes on a Chair"
                                                            loading="lazy"
                                                            style={{
                                                                transform:
                                                                    "translate(0px, -15.80009607px) rotate(0deg)",
                                                                transformOrigin: "32px 48.03001876px",
                                                                width: 64,
                                                                height: "96.06003752px",
                                                                display: "block",
                                                                opacity: 1.0,
                                                                objectFit: "fill"
                                                            }}
                                                        />
                                                    </LinkComponent>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="p3yu918HsKvHLIGh" style={{ zIndex: 7 }}>
                            <div
                                id="zcq8r5JjASvx0Waw"
                                style={{ paddingTop: "100.71850842%", transform: "rotate(0deg)" }}
                            >
                                <div
                                    id="rJ9u5HjWU3PqvDCx"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <svg
                                        id="vydlQKaWZ08LI5jq"
                                        viewBox="0 0 64.0 64.4598"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1.0,
                                            overflow: "hidden",
                                            position: "absolute",
                                            top: "0%",
                                            left: "0%",
                                            background: 'url("data:image/png'
                                        }}
                                    >
                                        <g id="PwW6HVcUVnmpF97B" style={{ transform: "scale(1, 1)" }}>
                                            <foreignObject
                                                id="E3O3TIEDBQu2UStL"
                                                style={{ width: 64, height: "64.4598px" }}
                                            >
                                                <div
                                                    id="Xc4m4xmQwvsU2CCF"
                                                    style={{
                                                        clipPath:
                                                            'path("M0,0 L64,0 L64,64.45984539 L0,64.45984539 Z")'
                                                    }}
                                                >
                                                    <div
                                                        id="Q3nrAxJOHkzvbz2C"
                                                        style={{
                                                            transform: "scale(1, 1)",
                                                            transformOrigin: "32px 32.5px",
                                                            animation: "auto ease 0s 1 normal none running none"
                                                        }}
                                                    >
                                                        <img
                                                            src="images/10.jpg"
                                                            alt="Top View of Tray with Coffee and Croissants on Bed"
                                                            loading="lazy"
                                                            style={{
                                                                transform:
                                                                    "translate(0px, -15.71015221px) rotate(0deg)",
                                                                transformOrigin: "32px 47.94007491px",
                                                                width: 64,
                                                                height: "95.88014981px",
                                                                display: "block",
                                                                opacity: 1.0,
                                                                objectFit: "fill"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Moodboard;
