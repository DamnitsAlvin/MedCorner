const Meddata = {
    medicines :[
        {
            name:"Biogesic", 
            Distributor: "Unilab",
            price: 7, 
            description: "A trusted brand of paracetamol, Paracetamol (Biogesic) is a medication that is typically used to relieve mild to moderate pain such as headache, backache, menstrual cramps, muscular strain, minor arthritis pain, toothache, and reduce fevers caused by illnesses such as the common cold and flu. Generally, Paracetamol (Biogesic) is safe to take on an empty stomach. According to the National Health Service in the UK, paracetamol is often recommended as one of the first treatments of pain because it gives relief for most people, even for children, breastfeeding and/or pregnant women, and the elderly. However, if you’re pregnant and breastfeeding, you should still seek consultation with your doctor prior to taking the medication.", 
            generic_name:"Paracetamol",
            Date_of_Production:"03/22/2019", 
            Date_of_Expiry: "03/22/2022", 
            Category:["Analgesic-antipyretic", "Medicine"], 
            Purpose:"Pain reliever and fever reducer",
            image: "./img/medicine/biogesic.jpg",
            countInStock:50
        }, 
        {
            name:  "Neozep Forte", 
            Distributor: "Unilab" ,
            price: 6.00,
            description: "Neozep Forte for the relief of clogged nose, runny nose, postnasal drip, itchy and watery eyes, sneezing, headache, body aches, and fever associated with the common cold, allergic rhinitis, sinusitis, flu, and other minor respiratory tract infections. They also help decongest sinus openings and passages. It provides fast relief from cold and its symptoms in as fast as 15 minutes.",         
            generic_name: "Chlorphenamine Maleate",
            Date_of_Production: "09/16/2019",
            Date_of_Expiry: "11/6/2022",
            Category: ["Anilide"] ,
            Purpose: "Used for the relief of clogged nose, runny nose, postnasal drip, itchy and watery eyes, sneezing, headache, and body aches.",
            image: "./img/medicine/neozep.jpg",
            countInStock:50

        }, 
        {
            name:  "Norvasc", 
            Distributor: "Pfizer", 
            price: 22.85,
            description: "Norvasc a prescription medication that is used with or without other medications to treat high blood pressure. Lowering blood pressure helps prevent strokes, heart attacks, and kidney problems. Norvasc belongs to a class of drugs known as calcium channel blockers. It works by relaxing blood vessels so blood can flow more easily. It is also used to prevent certain types of chest pain (angina). It may help to increase your ability to exercise and decrease the frequency of angina attacks. It should not be used to treat attacks of chest pain when they occur. Use other medications (such as sublingual nitroglycerin) to relieve attacks of chest pain as directed by your doctor.",
            generic_name: "Amlodipine-Atorvastatin",
            Date_of_Production: "9/22/2019",
            Date_of_Expiry: "5/17/2023",
            Category: ["Calcium Channel Blockers", "Antianginal Agents"],
            Purpose: "Prevention and treatment of heart pain or chest pain from angina, and for the treatment of high blood pressure.",
            image: "./img/medicine/norvasc.jpg",
            countInStock:50

        },
        {
            name:  "Zithromax", 
            Distributor: "Pfizer" ,
            price: 108.50,
            description: "Zithromax is an antibiotic medication used for the treatment of several bacterial infections. This includes middle ear infections, strep throat, pneumonia, traveler's diarrhea, and certain other intestinal infections. Along with other medications, it may also be used for malaria. It can be taken by mouth or intravenously with doses once per day. It also known as Z-Pak, is an antibiotic used to treat bacterial infections such as bronchitis, pneumonia, and infections of the ears, lungs and other organs. First approved by the FDA in 1991 to treat certain respiratory and skin infections, its use has since expanded to include a wide variety of bacterial infections.",
            generic_name: "Azithromycin",
            Date_of_Production: "9/2/2018",
            Date_of_Expiry: "4/30/2024",
            Category: ["Antibiotics-Macrolides"],
            Purpose: "A semi-synthetic macrolide antibiotic used for treating tonsillitis, bronchitis, pneumonia, and sinusitis caused by susceptible bacteria.",
            image:"./img/medicine/zithromax.jpg",
            countInStock:50
        },
        {
            name:  "Plavix" ,
            Distributor: "Ultramed",
            price: 33.00,
            description: "Each film-coated tablet contains Plavix (as Bisulfate) 75 mg. Plavix is used to lessen the chances of heart attack or stroke. It is given to people who have already had a heart attack or stroke or to people with other blood circulation problem that could lead to a stroke or heart attack. A heart attack or stroke may occur when a blood vessel in the heart or brain is blocked by a blood clot. Plavix reduces the chance that a harmful blood clot will form by preventing certain cells in the blood from clumping together.",
            generic_name: "Clopidogrel",
            Date_of_Production: "2/17/2019",
            Date_of_Expiry: "2/11/2021",
            Category:[ "Anticoagulants", "Antiplatelets", "Fibrinolytics"],
            Purpose: "For the prevention of atherosclerotic events in the peripheral arterial disease, or within 35 days of myocardial infarction or within 6 months of ischemic stroke, or in acute or coronary syndrome without ST-segmental elevation.",
            image:"./img/medicine/plavix.png",
            countInStock:50
        },
        {
            name: "Amoxil",
            Distributor: "GlaxoSmithKline",
            price: 115.00,
            description: "Amoxil is used to treat bacterial infections in many different parts of the body. It is also used with other medicines (e.g., clarithromycin, lansoprazole) to treat H. pylori infection and duodenal ulcers. Amoxicil belongs to the group of medicines known as penicillin antibiotics. It works by killing the bacteria and preventing their growth. However, this medicine will not work for colds, flu, or other virus infections. This medicine is available only with your doctor's prescription.",
            generic_name: "Amoxicillin",
            Date_of_Production: "7/18/2020",
            Date_of_Expiry:" 9/5/2025",
            Category: ["Antibiotics-Penicillins"],
            Purpose: "It works by stopping the growth of bacteria. This antibiotic treats only bacterial infections.",
            image:"./img/medicine/amoxil.jpg",
            countInStock:50

        },
        {
            name: "Medicol",
            Distributor:  "UNILAB,Inc",
            price: 6.00,
            description: "Each soft gel capsule contains: Medicol 200 mg or 400 mg. This product contains ibuprofen which belongs to a group of medicines called nonsteroidal anti-inflammatory drugs (NSAIDs). Like other NSAIDs, ibuprofen works by changing the body's chemical response to pain, swelling and fever resulting in relief of symptoms of inflammation (e.g., swelling, redness) and relief of pain and/or fever. Medicol given as a soft gel capsule is absorbed more rapidly by the body compared to an ordinary tablet.",
            generic_name: "Ibuprofen",
            Date_of_Production: "6/3/2018",
            Date_of_Expiry: "9/5/2023",
            Category: ["Nonsteroidal Anti-inflammatory"],
            Purpose: "Relief of headache including migraine, neuralgia; toothache, muscular aches, minor arthritic pain, backache, minor aches & pains associated w/ common cold & menstrual cramps (dysmenorrhea). Reduction of fever.",
            image:"./img/medicine/medicol.jpg",
            countInStock:50
        }, 
        {
            name: "Aforvir",
            Distributor: "ADP Pharma",
            price: 	26.00,
            description: "Aforvir is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching. It works by blocking a certain natural substance (histamine) that your body makes during an allergic reaction. Aforvir does not prevent hives or prevent/treat a serious allergic reaction (such as anaphylaxis). Therefore, if your doctor has prescribed epinephrine to treat allergic reactions, always carry your epinephrine injector with you. Do not use cetirizine in place of your epinephrine. ",
            generic_name: "Cetirizine",
            Date_of_Production: "3/18/2018",
            Date_of_Expiry: "8/15/2025",
            Category: ["Antihistamine"],
            Purpose: "Used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
            image:"./img/medicine/aforvir.jpg",
            countInStock:50
        },
        {
            name: "Proventil HFA",
            Distributor: "Kindeva",
            price: 439.00,
            description: "Proventil HFA is used to treat wheezing and shortness of breath caused by breathing problems (such as asthma, chronic obstructive pulmonary disease). Proventil HFA belongs to a class of drugs known as bronchodilators. It works by relaxing the muscles around the airways so that they open up and you can breathe more easily. Controlling symptoms of breathing problems can decrease time lost from work or school. This medication is taken by mouth and does not work right away. It should not be used for sudden attacks of breathing trouble. Your doctor may prescribe a quick-relief inhaler for sudden shortness of breath/asthma attacks while you are on this medication. Always have the quick-relief inhaler with you. Consult your doctor or pharmacist for more details.",
            generic_name: "Albuterol sulfate",
            Date_of_Production: "12/30/2020",
            Date_of_Expiry: "11/4/2025",
            Category:[" Beta2 Agonists"],
            Purpose: "Prescription medicine used to treat the symptoms of acute, or exercise induced asthma (Bronchospasm)",
            image:"./img/medicine/proventil.jpg",
            countInStock:50
        },
        {
            name: "Amrix",
            Distributor: "Teva Pharmaceuticals",
            price: 8.00,
            description: "Amrix is a brand-name prescription medication. It’s FDA-approved for use with rest and physical therapy to relieve certain muscle spasms in adults. Muscle spasms are sudden, involuntary muscle movements. Specifically, Amrix treats muscle spasms caused by acute (short-term), painful musculoskeletal conditions, such as a muscle strain or injury and it should only be taken for up to 2 to 3 weeks. It works to relieve muscle pain, tenderness, and stiffness. It belongs to a class of drugs called muscle relaxants. A drug class is a group of medications that act in a similar way.",
            generic_name:" Cyclobenzaprine hydrochloride",
            Date_of_Production:" 6/12/2019",
            Date_of_Expiry: "6/7/2022",
            Category: ["Skeletal Muscle Relaxants"],
            Purpose: "Prescription medicine used to treat the symptoms of Muscle Spasm.",
            image:"./img/medicine/amrix.png",
            countInStock:50
        },
        {
            name: "Keflex",
            Distributor: "Lupin Pharmaceuticals, Inc.",
            price: 44.00,
            description: "Keflex is an antibiotic that can treat several bacterial infections. It kills gram-positive and some gram-negative bacteria by disrupting the growth of the bacterial cell wall. It is a beta-lactam antibiotic within the class of first-generation cephalosporins. It works similarly to other agents within this class, including intravenous cefazolin, but can be taken by mouth. Keflex can treat certain bacterial infections, including those of the middle ear, bone, and joint, skin, and urinary tract. It may also be used for certain types of pneumonia, strep throat, and to prevent bacterial endocarditis. ",
            generic_name: "Cephalexin",
            Date_of_Production: "9/8/2020",
            Date_of_Expiry: "7/16/2024",
            Category: ["cephalosporin antibiotics"],
            Purpose: "Used to treat a wide variety of bacterial infections.",
            image:"./img/medicine/keflex.jpg",
            countInStock:50
        }, 
        {
            name: "Claritin ",
            Distributor: "Schering-Plough",
            price: 18.00,
            description: "Claritin is used to temporarily relieve the symptoms of hay fever (allergy to pollen, dust, or other substances in the air) and other allergies. These symptoms include sneezing, runny nose, and itchy eyes, nose, or throat. Claritin is also used to treat itching and redness caused by hives. However, loratadine does not prevent hives or other allergic skin reactions. Claritin is in a class of medications called antihistamines. It works by blocking the action of histamine, a substance in the body that causes allergic symptoms. ",
            generic_name: "Loratadine",
            Date_of_Production:"7/22/20",
            Date_of_Expiry:"8/15/2026",
            Category: ["Antihistamine"],
            Purpose: "Used to relieve symptoms of allergies, such as runny nose, sneezing, or itchy eyes, nose, or throat. This medicine is also given to help redness and itching caused by hives.",
            image:"./img/medicine/claritin.jpg",
            countInStock:50

        },
        {
            name: "Neurontin",
            Distributor: "Pfizer",
            price: 34.00,
            description: "Neurontin (gabapentin) is an anti-epileptic drug, also called an anticonvulsant. It affects chemicals and nerves in the body that are involved in the cause of seizures and some types of pain. It is used in adults to treat neuropathic pain (nerve pain) caused by herpes virus or shingles (herpes zoster). Neurontin is also used to treat seizures in adults and children who are at least 3 years old. Neurontin is used alone or in combination with other medications to treat seizures caused by epilepsy in adults and children who are at least 12 years old.",
            generic_name: "Gabapentin",
            Date_of_Production: "4/16/2018",
            Date_of_Expiry: "11/11/2021",
            Category: ["Gabapentinoid"],
            Purpose: "Prevent and control seizures.",
            image:"./img/medicine/neurontin.png",
            countInStock:50
        },
        {
            name: "Fersulfate Iron",
            Distributor: "Am-Europharma",
            price: 155.00,
            description: "Fersulfate Iron is a type of iron. You normally get iron from the foods you eat. In your body, iron becomes a part of your hemoglobin and myoglobin. Hemoglobin carries oxygen through your blood to tissues and organs. Myoglobin helps your muscle cells store oxygen. Fersulfate Iron is an essential body mineral. It is used to treat iron deficiency anemia (a lack of red blood cells caused by having too little iron in the body).",
            generic_name: "Ferrous sulfate",
            Date_of_Production: "11/29/2019",
            Date_of_Expiry: "12/19/2025",
            Category: ["oral", "iron bivalent"],
            Purpose: "For iron deficiency anemia and other nutritional anemia.",
            image:"./img/medicine/fersulfate.jpg",
            countInStock:50

        },
        {
            name: "Atorvast",
            Distributor: "Natrapharm",
            price: 29.00,
            description: "Atorvast is a statin medication used to prevent cardiovascular disease in those at high risk and treat abnormal lipid levels. For the prevention of cardiovascular disease, statins are a first-line treatment. It is taken by mouth. Common side effects include joint pain, diarrhea, heartburn, nausea, and muscle pains. Serious side effects may include rhabdomyolysis, liver problems, and diabetes. Use during pregnancy may harm the baby. Like all statins, atorvastatin works by inhibiting HMG-CoA reductase, an enzyme found in the liver that plays a role in producing cholesterol.",
            generic_name: "Atorvastatin calcium",
            Date_of_Production: "5/11/2020",
            Date_of_Expiry: "10/25/2024",
            Category: ["HMG","CoA", "reductase inhibitors"],
            Purpose: "Treatment of dyslipidemia and the prevention of cardiovascular disease.",
            image:"./img/medicine/atorvast.jpg",
            countInStock:50

        },
        {
            name: "Flagyl",
            Distributor: "Sanofi",
            price: 30.00,
            description: "Flagyl is an antibiotic that is used to treat a wide variety of infections. It works by stopping the growth of certain bacteria and parasites. This antibiotic treats only certain bacterial and parasitic infections. It will not work for viral infections (such as common cold, flu). Using any antibiotic when it is not needed can cause it to not work for future infections. Flagyl may also be used with other medications to treat certain stomach/intestinal ulcers caused by a bacterium (H. pylori). Flagyl is available by mouth, as a cream, and by injection into a vein.",
            generic_name: "Metronidazole",
            Date_of_Production: "3/6/2020",
            Date_of_Expiry: "9/27/2025",
            Category: ["Nitroimidazole" ,"antibiotics"],
            Purpose: "Primarily used to treat bacterial vaginosis, pelvic inflammatory disease",
            image:"./img/medicine/flagyl.jpg",
            countInStock:50
        },
        {
            name: "Aleve",
            Distributor: "Bayer HealthCare",
            price: 17.00,
            description: "Aleve among others, is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever. It is taken orally. It is available in immediate and delayed release formulations. Onset of effects is within an hour and last for up to twelve hours. It can be used to help relieve minor aches and pains and fever.",
            generic_name: 'Naproxen',
            Date_of_Production: "1/25/2021",
            Date_of_Expiry: "6/28/2026",
            Category: "Nonsteroidal anti-inflammatory drug",
            Purpose: "Used to treat a variety of inflammatory conditions and symptoms that are due to excessive inflammation, such as pain and fever.",
            image:"./img/medicine/aleve.jpg",
            countInStock:50

        },
        {
            name: "Cozaar",
            Distributor: "Merck & Co., Inc.",
            price: 20.00,
            description: "Cozaar is used to treat high blood pressure and to help protect the kidneys from damage due to diabetes. It is also used to lower the risk of strokes in patients with high blood pressure and an enlarged heart. Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. Cozaar belongs to a class of drugs called angiotensin receptor blockers (ARBs). It works by relaxing blood vessels so that blood can flow more easily.",
            generic_name: "Losartan potassium",
            Date_of_Production: "6/4/2020",
            Date_of_Expiry: "3/16/2025",
            Category: ["Angiotensin" ,"receptor blocker"],
            Purpose: "Treat hypertension and nephropathy",
            image:"./img/medicine/cozaar.jpg" ,
            countInStock:50
        },
        {
            name: "Prilosec",
            Distributor: "AstraZeneca",
            price: 42.00,
            description: "Prilosec is a prescription and over-the-counter medicine used to treat the symptoms of gastroesophageal reflux disease (GERD), gastric ulcers, and other conditions caused by excess stomach acid. It relieves symptoms such as heartburn, difficulty swallowing, and persistent cough. This medication helps heal acid damage to the stomach and esophagus, helps prevent ulcers, and may help prevent cancer of the esophagus.",
            generic_name: "Omeprazole",
            Date_of_Production: "2/11/2020",
            Date_of_Expiry: "2/11/2024",
            Category: ["Proton Pump Inhibitors"],
            Purpose: "Used to treat certain stomach and esophagus problems.",
            image:"./img/medicine/prilosec.jpg",
            countInStock:50

        }





    ]
}
export default Meddata