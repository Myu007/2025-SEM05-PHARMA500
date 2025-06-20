const questions = [
  {
    question: "Which route of drug administration is most likely to lead to the first-pass effect? ",
    answers: [
      { text: "Oral", correct: true },
      { text: "Sublingual ", correct: false },
      { text: "Intravenous", correct: false },
      { text: "Intramascular", correct: false },
      { text: "Subcutaneous", correct: false },
    ],
  },
  {
    question: " The route of drug administration that gives the most rapid onset of the phar- macological effect is",
    answers: [
      { text: "Intravenouse injection", correct: true },
      { text: "Intramuscular injection ", correct: false },
      { text: " Intradermal injection", correct: false },
      { text: " Peroral administration", correct: false },
      { text: "Subcutaneous injection", correct: false },
    ],
  },
  {
    question: "Volatile drug may be best administered by:",
    answers: [
      { text: "Inhalation", correct: true },
      { text: " Oral route", correct: false },
      { text: "Sublingual route", correct: false },
      { text: "Intrathecal route", correct: false },
      { text: "Rectal route", correct: false },
    ],
  },
  {
    question: " After peroral administration, drugs generally are absorbed best from the",
    answers: [
      { text: "Buccal cavity", correct: true },
      { text: "Stomach", correct: false },
      { text: "Duodenum", correct: false },
      { text: "Ileum", correct: false },
      { text: "Rectum", correct: false },
    ],
  },
  {
    question: "What is the main route of eliminationof drugs from the body?",
    answers: [
      { text: "Kidneys with urine", correct: true },
      { text: "Liver with bile", correct: false },
      { text: "Lungs with exhaled air", correct: false },
      { text: "Sweat glands with sweat", correct: false },
      { text: "With milk", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as clearance?",
    answers: [
      { text: "The rate of elimination of the drug from the body", correct: true },
      { text: "The completeness of absorption", correct: false },
      { text: "The nature of the distribution", correct: false },
      { text: "The content of the active form of the drug in the blood", correct: false },
      { text: "The rate of absorbtion", correct: false },
    ],
  },
  {
    question: "Two new drugs, A and B, are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy. Which of the following pairs of statements best describes drugs A and B?",
    answers: [
      { text: "A full agonist , B full agonist", correct: true },
      { text: "A full agonist , B competitive antagonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
      { text: "A full agonist , B partial agonist", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pharmacodynamics involves the study of following?",
    answers: [
      { text: "Mechanism of drug action", correct: true },
      { text: "Biotransformation of drugs in the organism", correct: false },
      { text: "Distribution of drugs in the organism", correct: false },
      { text: "Absorption of drugs from GIT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of pharmacodynamics drug interaction?",
    answers: [
      { text: " Insulin/Cortison", correct: true },
      { text: "Gentamicin/Ticarcillin", correct: false },
      { text: "Streptomycin/Cephalothin", correct: false },
      { text: "Oxtriphylline/Propranolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which one of the following action may happen in combination of the drugs Amikacin and cephalosporines?",
    answers: [
      { text: "Added nephrotoxicity", correct: true },
      { text: "Accumulation of acetaldehyde", correct: false },
      { text: " Inhibition of tubular secretion", correct: false },
      { text: "Induction of metabolism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Modest improvement in the memory of patients with Alzheimer’s disease may occur with drugs that increase transmission at which of the following receptors?",
    answers: [
      { text: " Cholinergic", correct: true },
      { text: " Serotonergic  ", correct: false },
      { text: "Dopaminergic", correct: false },
      { text: " Gabaergic", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The patient mentions bethanechol when asked about his medication history. The nurse recognizes that this drug is used for the treatment of which condition? ",
    answers: [
      { text: "Urinary retention", correct: true },
      { text: "Diarrhea", correct: false },
      { text: "Glaucoma", correct: false },
      { text: "Urinary incontinence", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33 year old male comes in to your clinic with a 4.Scm long superficial cut wound. You decide to suture it yourself. Take consent and ask the nurse to bring a local anaesthetic. Which of the following. though has the longest action, would not be your primary choice as it is the most toxic local anaesthetic?",
    answers: [
      { text: "Dibucaine", correct: true },
      { text: "Chlorprocaine", correct: false },
      { text: "Lignocaine", correct: false },
      { text: "Procaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug is Sugammadex an antagonist of?",
    answers: [
      { text: "Rocuronium", correct: true },
      { text: "Atropine", correct: false },
      { text: "Neostigmine", correct: false },
      { text: "Glycopyrrolate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Propanolol is useful in the management of which of the following side effects of a typical neuroleptic?",
    answers: [
      { text: "Akathisia", correct: true },
      { text: "Parkinsonism", correct: false },
      { text: "Tardive dyskinesia", correct: false },
      { text: "Acute muscle dystonia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of adrenergic agonists?",
    answers: [
      { text: "Mimic the effects of the sympathetic nervous system", correct: true },
      { text: "Block adrenergic receptors", correct: false },
      { text: "Inhibit the release of norepinephrine", correct: false },
      { text: "Decrease heart rate and blood pressure", correct: false },
      { text: "Induce parasympathetic activity", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of adrenergic agonists?",
    answers: [
      { text: "Tachycardia", correct: true },
      { text: "Bradycardia", correct: false },
      { text: "Hypotension", correct: false },
      { text: "Increased salivation", correct: false },
      { text: "Bronchoconstriction", correct: false },
    ],
  },
  {
    question: "What is the primary action of adrenergic receptor antagonists?",
    answers: [
      { text: "Block the effects of the sympathetic nervous system", correct: true },
      { text: "Mimic the effects of the sympathetic nervous system", correct: false },
      { text: "Increase heart rate and blood pressure", correct: false },
      { text: "Stimulate the parasympathetic nervous system", correct: false },
      { text: "Increase the release of norepinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a selective beta-1 adrenergic antagonist?",
    answers: [
      { text: "Atenolol", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following conditions may benefit from the use of alpha-1 adrenergic antagonists?",
    answers: [
      { text: "Benign prostatic hyperplasia", correct: true },
      { text: "Asthma", correct: false },
      { text: "Heart failure", correct: false },
      { text: "Anxiety", correct: false },
      { text: "Glaucoma", correct: false },
    ],
  },
  {
    question: "Opioid analgesics are primarily derived from which plant?",
    answers: [
      { text: "Opium poppy", correct: true },
      { text: "Willow tree", correct: false },
      { text: "Cannabis plant", correct: false },
      { text: "Foxglove plant", correct: false },
      { text: "Willow bark tree", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of NSAIDs?",
    answers: [
      { text: "Inhibiting the synthesis of prostaglandins", correct: true },
      { text: "Inhibiting the release of neurotransmitters", correct: false },
      { text: "Blocking pain receptors", correct: false },
      { text: "Directly affecting the central nervous system", correct: false },
      { text: "Stimulating the release of endorphins", correct: false },
    ],
  },
  {
    question: "Which of the following is a strong opioid agonist?",
    answers: [
      { text: "Naloxone", correct: true },
      { text: "Naltrexone", correct: false },
      { text: "Morphine", correct: false },
      { text: "Buprenorphine", correct: false },
      { text: "Pentazocine", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of opioid analgesics?",
    answers: [
      { text: "Constipation", correct: true },
      { text: "Increased respiratory rate", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Tachycardia", correct: false },
      { text: "Increased appetite", correct: false },
    ],
  },
  {
    question: "Which of the following is a contraindication to use drug Thalidomide?",
    answers: [
      { text: "HIV related neuropathy", correct: true },
      { text: "Erythema nodosum leprosum", correct: false },
      { text: "HIV related oral ulcer", correct: false },
      { text: "Behcet’s disease", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is preferred for long term treatment of severe anxiety disorder with intermittent panic attacks?",
    answers: [
      { text: "Selective serotonin reuptake inhibitor", correct: true },
      { text: "Phenothiazine", correct: false },
      { text: "B blocker", correct: false },
      { text: "Azapirone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an antidepressant drug which is known to have both high sedative and anticholinergic activity?",
    answers: [
      { text: "Amitriptyline", correct: true },
      { text: "Trazodone", correct: false },
      { text: "Fluoxetine", correct: false },
      { text: "Phenalgine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient Manoj with severe pain thought to be of gastrointestinal origin received 60 mg of meperidine subsequent to which he developed reaction characterized by tachycardia, hypertension, hyperpyrexia and seizures. He gave the history that he is also taking some medicine for his psychiatric condition. Which of the following drug can be held responsible for this sort of reaction?",
    answers: [
      { text: "Phenelzine", correct: true },
      { text: "Alprazolam", correct: false },
      { text: "Lithium", correct: false },
      { text: "Imipramine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs do not cause hyperprolactinemia? ",
    answers: [
      { text: "Bromocriptine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Reserpine", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a pharmacological property of levodopa?",
    answers: [
      { text: "Domperidone reduces levodopa-induced vomiting and its therapeutic potential", correct: true },
      { text: "It is a prodrug", correct: false },
      { text: "Pyridoxine reduces the effect of levodopa in Parkinsonism", correct: false },
      { text: "Phenothiazines reduce its effectiveness in Parkinsonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following can cause long term of aluminum hydroxide?",
    answers: [
      { text: "Osteomalacia", correct: true },
      { text: "Hyperuricaemia", correct: false },
      { text: "Hyperglycemia", correct: false },
      { text: "Vitamin B 12 deficiency", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Proton-pump inhibitors are most effective when they are given?",
    answers: [
      { text: "Shortly before meals", correct: true },
      { text: "After meals", correct: false },
      { text: "Along with H2 blockers", correct: false },
      { text: "During prolonged fasting periods", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of  the following drug does not cause stimulating 5HT4 receptors to act as a prokinetic agent?",
    answers: [
      { text: "Domperidone", correct: true },
      { text: "Renzapride", correct: false },
      { text: "Metoclopramide", correct: false },
      { text: "Cisapride", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 28 year old pregnant female, came in for her 4th antenatal visit. When asked about any issues, she mentions that she has had gastric irritation for about 2 weeks duration and no amount of natural therapy or diet modification helped through it. You suspect it could be peptic ulcer disease. Which of the following medications you would never give this patient for the same?",
    answers: [
      { text: "Misoprostol", correct: true },
      { text: "Ranitidine", correct: false },
      { text: "Omeprazole", correct: false },
      { text: "Famotidine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is about theophylline?",
    answers: [
      { text: "Its use in asthma has declined because of narrow safety margin", correct: true },
      { text: "Its plasma half-life is longer in children as compared to that in adults", correct: false },
      { text: "Its dose needs to be reduced in the smokers", correct: false },
      { text: "It acts by increasing the formation of cAMP", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the most appropriate therapy for bronchodilation in acute severe asthma?",
    answers: [
      { text: "Nebulized SABAs", correct: true },
      { text: "Intravenous aminophylline", correct: false },
      { text: "lnhalational anticholinergics", correct: false },
      { text: "Intravenous SABAs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is delivered as an aerosol formulation through a dry powder inhaler?",
    answers: [
      { text: "Indacaterol", correct: true },
      { text: "Ipratropium bromide", correct: false },
      { text: "Formoterol", correct: false },
      { text: "Salmeterol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs CANNOT be administered by inhalation?",
    answers: [
      { text: "Theophylline", correct: true },
      { text: "Ipratropium bromide", correct: false },
      { text: "Budesonide", correct: false },
      { text: "Terbutaline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary cell type responsible for histamine release?",
    answers: [
      { text: "Mast cells", correct: true },
      { text: "Neutrophils", correct: false },
      { text: "Eosinophils", correct: false },
      { text: "Lymphocytes", correct: false },
      { text: "Erythrocytes", correct: false },
    ],
  },
  {
    question: "Which of the following is a primary effect of histamine release?",
    answers: [
      { text: "Increased vascular permeability", correct: true },
      { text: "Vasoconstriction", correct: false },
      { text: "Bronchodilation", correct: false },
      { text: "Increased vascular permeability", correct: false },
      { text: "Decreased mucus production", correct: false },
    ],
  },
  {
    question: "Which of the following drug is cardiac glycoside?",
    answers: [
      { text: "Strophanthin", correct: true },
      { text: "Quinidine sulfate", correct: false },
      { text: "Caffeine", correct: false },
      { text: "Budesonide", correct: false },
      { text: "Cordiamine", correct: false },
    ],
  },
  {
    question: "If quinidine and digoxin are administered concurrently, what effect does quinidine have on digoxin?",
    answers: [
      { text: "Plasma concentration of digoxin is increased", correct: true },
      { text: "Absorption of digoxin from the gastrointestinal tract is decreased", correct: false },
      { text: "Effect of digoxin on the AV node is antagonized", correct: false },
      { text: "Metabolism of digoxin is prevented", correct: false },
      { text: "Adverse effect of digoxin is decreased", correct: false },
    ],
  },
  {
    question: "Which of the following antiarrhythmic drugs belongs to calcium channel blockers?",
    answers: [
      { text: " verapamil", correct: true },
      { text: " lidocaine", correct: false },
      { text: " inderal", correct: false },
      { text: "cordarone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This drug is a Class IA antiarrhythmic drug: ",
    answers: [
      { text: "Quinidine ", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Flecainide ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This drug has beta-adrenergic blocking activity: ",
    answers: [
      { text: "Sotalol ", correct: true },
      { text: "Quinidine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Verapamil ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This drug is a Class II antiarrhythmic drug: ",
    answers: [
      { text: " Propranolol ", correct: true },
      { text: "Quinidine", correct: false },
      { text: "Lidocaine ", correct: false },
      { text: "Verapamil ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs causes a decrease in liver triacylglycerol synthesis by limiting available free fatty acids needed as building blocks for this pathway?",
    answers: [
      { text: "Niacin", correct: true },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs inhibits 3-hydroxy-3-methylglutaryl CoA reductase, the rate limiting step in cholesterol synthesis?",
    answers: [
      { text: "Lovastatin", correct: true },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "How does aspirin work when used to prevent myocardial infarction?",
    answers: [
      { text: "Inhibition of cyclooxygenase", correct: true },
      { text: "Lowering serum lipids", correct: false },
      { text: "Coronary steal phenomenon", correct: false },
      { text: "Inhibition of thromboxane synthetase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following Beta blocker increases HDL?",
    answers: [
      { text: "Bucindolol", correct: true },
      { text: "Nebivolol", correct: false },
      { text: "Carvedilol", correct: false },
      { text: "Celiprolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following fluid and electrolyte imbalance are not seen with thiazide diuretics?",
    answers: [
      { text: "Hypermagnesemia", correct: true },
      { text: "Hypochloremia", correct: false },
      { text: "Metabolic alkalosis", correct: false },
      { text: "Hypercalcemia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "At equally natriuretic doses. which of the following drugs causes maximum potassium excretion?",
    answers: [
      { text: "Acetazolamide", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Aldosterone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a hematopoietic growth factor used to stimulate red blood cell production?",
    answers: [
      { text: "Epoetin alfa", correct: true },
      { text: "Heparin", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Aspirin", correct: false },
      { text: "Clopidogrel", correct: false },
    ],
  },
  {
    question: "This drug class is commonly used to treat clotting disorders and can increase the risk of bleeding.",
    answers: [
      { text: "Anticoagulants", correct: true },
      { text: "Antiplatelet drugs", correct: false },
      { text: "Thrombolytics", correct: false },
      { text: "Hematopoietic growth factors", correct: false },
      { text: "Iron supplements", correct: false },
    ],
  },
  {
    question: "Intravenous furosemide is used for rapid symptom control in acute left ventricular failure. How does it provide rapid relief of dyspnea?",
    answers: [
      { text: "By causing vasodilation", correct: true },
      { text: "By causing rapid diuresis and volume depletion", correct: false },
      { text: "By causing bronchodilation", correct: false },
      { text: "By stimulating left ventricular contractility", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40 year old man has megaloblastic: anemia and early signs of neurological abnormality.Which of the following drug is most probably required?",
    answers: [
      { text: "Vitamin B12", correct: true },
      { text: "folic acid", correct: false },
      { text: "Iron sulphate", correct: false },
      { text: "Erythropoietin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Why does Heparin act as an anticoagulant?",
    answers: [
      { text: "Activates antithrombin III", correct: true },
      { text: "Inactivates antithrombin III", correct: false },
      { text: "Activates thrombin", correct: false },
      { text: "Activates factor Xa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which among the following is not a fetal abnormality caused by warfarin administered during pregnancy?",
    answers: [
      { text: "Macrocephaly", correct: true },
      { text: "Fetal haemorrhage", correct: false },
      { text: "Stippled epiphyses", correct: false },
      { text: "Nasal hypoplasia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug can be used as an antidote for fibrinolytic therapy?",
    answers: [
      { text: "E-Aminocaproic acid", correct: true },
      { text: "Streptokinase", correct: false },
      { text: "Heparin", correct: false },
      { text: "Protamine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is treatment of choice in a patient acute pulmonary embolism with right ventricular hyperkinesia and a compromised cardiac output but normal blood pressure?",
    answers: [
      { text: "Thrombolytic agent", correct: true },
      { text: "IV Filters", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Low molecular weight heparin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 29-year-old male presented with symptoms of Ototoxicity and nephrotoxicity after a week. Which of the following drugs do you think is responsible for this?",
    answers: [
      { text: "Vancomycin", correct: true },
      { text: "Azithromycin", correct: false },
      { text: "Clindamycin", correct: false },
      { text: "Penicillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not an established antimicrobial synergy at the clinical level?",
    answers: [
      { text: "Penicillin and tetracycline for bacterial meningitis", correct: true },
      { text: "B Carbenicillin and gentamicin for pseudomonal infections", correct: false },
      { text: "Amphotericin and flucytosine for cryptococcal meningitis", correct: false },
      { text: "Trimethoprim and sulfamethoxazole for coliform infections", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug that can not be used to treat infections caused by Bacteroides fragilis?",
    answers: [
      { text: "Amikacin", correct: true },
      { text: "Metronidazole", correct: false },
      { text: "Trovafloxacin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A neonate who has been diagnosed with neonatal sepsis has been brought up for her daily dose of IM gentamicin, What's the reason for giving it IM instead of Oral?",
    answers: [
      { text: "It has poor absorption", correct: true },
      { text: "It has adverse effects on gastric mucosa", correct: false },
      { text: "It interferes with absorption of other drugs", correct: false },
      { text: "It is rapidly destroyed by gastric acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is the one that should be used to prevent close contacts of a patient with meningococcal meningitis?",
    answers: [
      { text: "Rifampicin", correct: true },
      { text: "Dapsone", correct: false },
      { text: "Erythromidine", correct: false },
      { text: "Amikacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For a 23 old pregnant female having severe allergy to amoxicillin.Which of the following drug used to treat gonorrhoea in a single dose?",
    answers: [
      { text: "Spectinomycin", correct: true },
      { text: "Ceftriaxone", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a first-generation quinolone primarily used for urinary tract infections?",
    answers: [
      { text: "Nalidixic acid", correct: true },
      { text: "Ciprofloxacin", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Moxifloxacin", correct: false },
      { text: "Ceftriaxone", correct: false },
    ],
  },
  {
    question: "What is the combination of sulfamethoxazole and trimethoprim known as?",
    answers: [
      { text: "Co-trimoxazole", correct: true },
      { text: "Penicillin G", correct: false },
      { text: "Cephalexin", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "Azithromycin", correct: false },
    ],
  },
  {
    question: "What is the primary use of co-trimoxazole?",
    answers: [
      { text: "Prevention of urinary tract infections", correct: true },
      { text: "Treatment of fungal infections", correct: false },
      { text: "Treatment of viral infections", correct: false },
      { text: "Treatment of systemic infections", correct: false },
      { text: "Treatment of tuberculosis", correct: false },
    ],
  },
  {
    question: "Which of the following is a key difference between sulfonamides and co-trimoxazole?",
    answers: [
      { text: "Co-trimoxazole has a broader spectrum of activity than sulfonamides.", correct: true },
      { text: "Sulfonamides are more effective against Gram-positive bacteria.", correct: false },
      { text: "Sulfonamides are more likely to cause kidney damage.", correct: false },
      { text: "Co-trimoxazole is more effective against fungal infections.", correct: false },
      { text: "Sulfonamides are more effective against viral infections.", correct: false },
    ],
  },
  {
    question: "Which of the following is a true statement regarding quinolones and urinary tract antiseptics?",
    answers: [
      { text: "Quinolones are bactericidal, while urinary tract antiseptics are bacteriostatic.", correct: true },
      { text: "Quinolones are more effective against Gram-positive bacteria than Gram-negative bacteria.", correct: false },
      { text: "Urinary tract antiseptics are primarily used to treat systemic infections.", correct: false },
      { text: "Both quinolones and urinary tract antiseptics can cause renal toxicity.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a common urinary tract antiseptic?",
    answers: [
      { text: "Nitrofurantoin", correct: true },
      { text: "Penicillin", correct: false },
      { text: "Cephalosporin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "Moxifloxacin", correct: false },
    ],
  },
  {
    question: "A middle-aged man with chronic renal failure is diagnosed with pulmonary tuberculosis with a positive sputum test. His creatinine clearance is 25 ml/min. Except for which of the following drugs do the following require dose adjustments?",
    answers: [
      { text: "Rifampin", correct: true },
      { text: "Streptomycin", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Isoniazid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient has been prescribed streptomycin as part of his Ant i-tubercular-treatment regimen. Which of the following is the most serious adverse effect you will expect in this case?",
    answers: [
      { text: "Ototoxicity", correct: true },
      { text: "Hepatotoxicity", correct: false },
      { text: "Ocular toxicity", correct: false },
      { text: "Hematological disturbances", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old female medical student from Assam presented with symptoms of chronic episodic headache and intermittent low-grade fever in the evening. A presumptive diagnosis of malaria was made based on the patient's place of residence. Which of the following schizontocidal drugs will be used to treat this patient, which is also the fastest acting",
    answers: [
      { text: "Artemether", correct: true },
      { text: "Mefloquine", correct: false },
      { text: "Chloroquine", correct: false },
      { text: "Proguanil", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A researcher who was studying on Plasm odium species decided to visit the malaria- endemic place in Odisha after 2 days to do his clinical study for 5 weeks. Which of the following drugs need to be taken as prophylaxis before visiting the malaria-endemic place?",
    answers: [
      { text: "Doxycycline", correct: true },
      { text: "Mefloquine", correct: false },
      { text: "Artesunate", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is dose limiting toxicity of amphotericin B?",
    answers: [
      { text: "Renal tubular acidosis", correct: true },
      { text: "Infusion related reaction", correct: false },
      { text: "Myelosuppression", correct: false },
      { text: "Hypotension", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the drug of choice for the treatment of neurocysticercosis?",
    answers: [
      { text: "Albendazole", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Piperazine", correct: false },
      { text: "Pyrantel palmoate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which antihelminthic also acts as an immunomodulator?",
    answers: [
      { text: "Levamisole", correct: true },
      { text: "Albendazole", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Piperazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50 year old male had fever for 1 week, abdominal distention and loss of appetite. It is not responding to antibiotics and antimalarial. Wida I test is negative but RK39 dipstick test was positive. Which drug can be used?",
    answers: [
      { text: "Amphotericin B", correct: true },
      { text: "Bedaquiline", correct: false },
      { text: "Linezolide", correct: false },
      { text: "Fluconazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A person is being treated for Human Immunodeficiency Virus-1 . He developed hypertriglyceridemia and hypercholesterolemia. Which of the following is most likely drug implicated for these adverse effects?",
    answers: [
      { text: "Ritonavir", correct: true },
      { text: "Raltegravir", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "Efavirenz", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an aerosol drug used for treatment of RSV infection in a child?",
    answers: [
      { text: "Ribavirin", correct: true },
      { text: "Indinavir", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to cause additive anemia and neutropenia if administered to an AIDS patient taking zidovudine?",
    answers: [
      { text: "Ganciclovir", correct: true },
      { text: "Amantadine", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "Stavudine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " A previously known case of AIDS patient presents with complaints of recurrent episodes of severe abdominal pain and vomiting over the pasts days. The pain was more in the epigastric region radiating to the upper back, increased with food intake, and in the supine position. On laboratory examination, his serum amylase and lipase levels were 909 U/L and 1744 UIL respectively. Which of the drug most likely to be responsible for this?",
    answers: [
      { text: "Didanosine", correct: true },
      { text: "Ketoconazole", correct: false },
      { text: "Saquinavir", correct: false },
      { text: "Zidovudine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a characteristic of methotrexate?",
    answers: [
      { text: "Folic acid reverses its toxic effects", correct: true },
      { text: "Its toxicity primarily affects bone marrow and epithelial structures", correct: false },
      { text: "It is cell cycle specific and kills cells in the s phase", correct: false },
      { text: "It is the drug of choice for choriocarcinoma", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is Bevacizumab?",
    answers: [
      { text: "Monoclonal antibody against VEGF", correct: true },
      { text: "Anti-IL-2 monoclonal antibody", correct: false },
      { text: "Monoclonal antibody against FGFR", correct: false },
      { text: "Monoclonal antibody against EGFR", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 46-year-old female patient with known breast cancer was prescribed fluorouracil therapy. Which of the following correctly describes the mechanism of action of this drug?",
    answers: [
      { text: "Cytotoxicity caused by a metabolite that interferes with dTMP formation", correct: true },
      { text: "Cross-linking of double-stranded DNA and subsequent inhibition of DNA replication and transcription", correct: false },
      { text: "Irreversible inhibition of dihydrofolate reductase", correct: false },
      { text: "Inhibition of mitotic spindle formation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which liver enzyme is elevated in Azathioprine toxicity?",
    answers: [
      { text: "SGPT", correct: true },
      { text: "GGT", correct: false },
      { text: "ALP", correct: false },
      { text: "TPMT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following immunosuppressants requires regular monitoring of renal function?",
    answers: [
      { text: "Cyclosporine", correct: true },
      { text: "Mycophenolate mofetil", correct: false },
      { text: "Methatrexate", correct: false },
      { text: "Azathioprine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of immunocorrective agents?",
    answers: [
      { text: "Suppressing the immune system", correct: true },
      { text: "Stimulating the immune system", correct: false },
      { text: "Directly killing bacteria", correct: false },
      { text: "Blocking viral replication", correct: false },
      { text: "Inhibiting inflammation", correct: false },
    ],
  },
  {
    question: "Which of the following drugs inhibit 5'- Deiodinase?",
    answers: [
      { text: "Propylthiouracil", correct: true },
      { text: "Lugol’s Iodine", correct: false },
      { text: "Radioactive iodine", correct: false },
      { text: "Methimazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following the anti-thyroid drug with the most rapid onset of anti-thyroid action? ",
    answers: [
      { text: "Sodium iodide", correct: true },
      { text: "Propylthiouracil", correct: false },
      { text: "Methimazole", correct: false },
      { text: "I 31", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is more true of liothyronine than levothyroxine?",
    answers: [
      { text: "Better absorption", correct: true },
      { text: "Longer half-life", correct: false },
      { text: "Slower onset of action", correct: false },
      { text: "Less potency", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which oral hypoglycemic drug class works by stimulating insulin release from the pancreas?",
    answers: [
      { text: "Sulfonylureas", correct: true },
      { text: "Biguanides", correct: false },
      { text: "Thiazolidinediones", correct: false },
      { text: "DPP-4 inhibitors", correct: false },
      { text: "GLP-1 receptor agonists", correct: false },
    ],
  },
  {
    question: "A patient taking levothyroxine regularly becomes pregnant. Which of the following should be the dose of the levothyroxine?",
    answers: [
      { text: "Increased", correct: true },
      { text: "Decreased", correct: false },
      { text: "Unaltered", correct: false },
      { text: "stop using", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an indication for the use of folic acid?",
    answers: [
      { text: "Counteracting the toxicity of high-dose methotrexate therapy", correct: true },
      { text: "Prevention of neural tube defects in the offspring of women receiving anticonvulsants", correct: false },
      { text: "Pernicious anemia", correct: false },
      { text: "Anemia associated with renal failure", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 62 year old male patient comes to you with urinary retention, back pain, and hematuria. He also has complaints of Weight loss and loss of appetite, Bone pain with repeated fracture and Neurologic deficits. On Digital rectal examination a nodule is discovered on prostate and prostate-specific antigen (PSA) found out to be very high on evaluation. You have started first line hormonal therapy for the above problem but patient disease found to be refractory to it.Which of the following can not be chosen for above refractory disease?",
    answers: [
      { text: "Bicalutamide", correct: true },
      { text: "Enzalutamine", correct: false },
      { text: "Apalutamide", correct: false },
      { text: "Abiraterone acetate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which hormone is primarily responsible for increasing blood calcium levels?",
    answers: [
      { text: "Parathyroid hormone (PTH)", correct: true },
      { text: "Insulin", correct: false },
      { text: "Glucagon", correct: false },
      { text: "Calcitonin", correct: false },
      { text: "Aldosterone", correct: false },
    ],
  },
  {
    question: "Metformin is considered to be the first-line oral hypoglycemic agent of choice. It has also been used in the treatment of PCOS. It is not found to be effective in lowering blood glucose in which of the following populations?",
    answers: [
      { text: "Non diabetics", correct: true },
      { text: "Obese diabetics", correct: false },
      { text: " Type 2 diabetics", correct: false },
      { text: "Diabetics not responding to sulfonylureas", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " A 44 year old male visits your clinic situated in the outskirts of a town. He is a known diabetic who was having sugar on control, taking Metformin 500 mg twice a day. The recent results make you consider adding another medication. Due to the financial crunch the patient is going through, you would prefer prescribing a sulfonylurea over the newer agents. Why would you pick glipizide over chlorpropamide?",
    answers: [
      { text: " It is more potent", correct: true },
      { text: "It is longer acting", correct: false },
      { text: "It does not lower blood sugar in nondiabetic subjects", correct: false },
      { text: "It is less prone to cause hypoglycemic reaction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Nitroglycerine is administered by which route?",
    answers: [
      { text: "By sublingual", correct: true },
      { text: "By inhalation", correct: false },
      { text: "By subcutaneouse", correct: false },
      { text: "By intramuscular", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The substances produced by or derived from living organisms that are used to kill bacteria or prevent their multiplication is called:",
    answers: [
      { text: "Antibiotics", correct: true },
      { text: "Antidotes", correct: false },
      { text: "Hormones ", correct: false },
      { text: "Enzymes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For a drug given orally, the principle site of drug absorption is:",
    answers: [
      { text: "Small intestine", correct: true },
      { text: "Mouth", correct: false },
      { text: "Oesophagus", correct: false },
      { text: "Large intestine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Specify from which dosage form, when taken orally the drug is absorbed and enters the bloodstream faster?",
    answers: [
      { text: "Solution", correct: true },
      { text: "Suspension", correct: false },
      { text: "Tablets", correct: false },
      { text: "Capsules", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with an edema would have an increased volume of distribution (Vd) if?",
    answers: [
      { text: "The patient was taking a hydrophilic drug", correct: true },
      { text: "The patient was taking a hydrophobic drug", correct: false },
      { text: " The patient was taking an anionic drug", correct: false },
      { text: "An edema always causes an increase in Vd", correct: false },
      { text: "An edema always causes an decrease in Vd", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as bioavailability?",
    answers: [
      { text: "Completeness and rate of drug intake into the total BF", correct: true },
      { text: "The nature of the distribution", correct: false },
      { text: "Metabolic rate", correct: false },
      { text: "The rate of administration", correct: false },
      { text: "The degree of binding by blood proteins", correct: false },
    ],
  },
  {
    question: "A new drug was tested in an in vitro system. It was found that only one enantiomer of the racemic pair bound substantially to a specific receptor, whereas the other enantiomer showed a negligible binding. Which of the following terms best defines this property?",
    answers: [
      { text: "Intrinsic activity", correct: true },
      { text: "Stereo-selectivity", correct: false },
      { text: "Maximal efficacy", correct: false },
      { text: "Variability", correct: false },
      { text: "Potency", correct: false },
    ],
  },
  {
    question: "Two new drugs ,A and B ,are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy.Which of the following pairs of statements best describes A and B?",
    answers: [
      { text: "A full agonist,B full agonist", correct: true },
      { text: "A full agonist,B partial agonist", correct: false },
      { text: "A full agonist ,B competitive antagonist", correct: false },
      { text: "A partial agonist,B noncompetitive antagonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
    ],
  },
  {
    question: "The most vulnerable period of pregnancy for the causation of foetal malformations due to drug is:",
    answers: [
      { text: "18-55 days of gestation", correct: true },
      { text: "56-84 days of gestation", correct: false },
      { text: "Second trimester", correct: false },
      { text: "36 weeks onwards", correct: false },
      { text: "Third trimester", correct: false },
    ],
  },
  {
    question: " Indiosyncrasy is:",
    answers: [
      { text: " A genetically determined abnormal reaction drugs", correct: true },
      { text: "A characteristic toxic effects at therapeutic doses", correct: false },
      { text: "An altered physiological state produced by repeated drugs use", correct: false },
      { text: "An immunologic ally mediated reaction", correct: false },
      { text: "Hypersensitivity reactions", correct: false },
    ],
  },
  {
    question: "Which of the following effect is not seen with cholinergic muscarinic receptor stimulation?",
    answers: [
      { text: "Rise in blood pressure", correct: true },
      { text: "Sweating", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Urination", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Parasympathomimetic drugs can be directly acting or indirectly acting. Of the directly-acting parasympathonfimetics, which drug has the maximum nicotinic receptor action?",
    answers: [
      { text: "Carbachol", correct: true },
      { text: "Bethanechol", correct: false },
      { text: "Pilocarpine", correct: false },
      { text: "Methacholine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What drug is Orthotoludine a metabolite of ?",
    answers: [
      { text: "Prilocaine", correct: true },
      { text: "Procaine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Tetracaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A female underwent LSCS surgery and it was performed under spinal anesthesia. As a complication of spinal anaesthesia, she has developed hypotension immediately after surgery. Her BP is 90/70 and HR is 100 per minute. Which is the best vasopressor to be chosen among the following for the treatment of above complication?",
    answers: [
      { text: "Phenylephrine", correct: true },
      { text: "Ephedrine", correct: false },
      { text: "Methoxamine", correct: false },
      { text: "Droxydopa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of salbutamol?",
    answers: [
      { text: "Relaxes bronchial smooth muscle", correct: true },
      { text: "Directly inhibits inflammation", correct: false },
      { text: "Decreases mucus production", correct: false },
      { text: "Inhibits histamine release", correct: false },
      { text: "Stabilizes mast cells", correct: false },
    ],
  },
  {
    question: "Salbutamol is primarily used to treat:",
    answers: [
      { text: "Asthma and COPD", correct: true },
      { text: "Hypertension", correct: false },
      { text: "Heart failure", correct: false },
      { text: "Anxiety disorders", correct: false },
      { text: "Migraine headaches", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a selective beta-2 adrenergic agonist commonly used in asthma treatment?",
    answers: [
      { text: "Albuterol", correct: true },
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Atenolol", correct: false },
    ],
  },
  {
    question: "Which adrenergic receptor is primarily responsible for vasoconstriction?",
    answers: [
      { text: "Alpha-1", correct: true },
      { text: "Alpha-2", correct: false },
      { text: "Beta-1", correct: false },
      { text: "Beta-2", correct: false },
      { text: "Dopamine", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of beta-blockers?",
    answers: [
      { text: "Bradycardia", correct: true },
      { text: "Anxiety", correct: false },
      { text: "Bronchodilation", correct: false },
      { text: "Tachycardia", correct: false },
      { text: "Increased blood pressure", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is the shortest-acting competitive neuromuscular blocker?",
    answers: [
      { text: "Mivacurium", correct: true },
      { text: "Doxacurium", correct: false },
      { text: "Pancuronium", correct: false },
      { text: "Vecuronium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient receives a toxic dose of lignocaine i.v. the patient is likely to exhibit?",
    answers: [
      { text: "Seizures and coma", correct: true },
      { text: "Mydriasis and diarrhea", correct: false },
      { text: "Respiratory paralysis", correct: false },
      { text: "Excessive salivation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The eutectic mixture approved for use, lignocaine-prilocaine, has which of the following unique as unique property?",
    answers: [
      { text: "By surface application, it can anaesthetize unbroken skin", correct: true },
      { text: "It causes motor blockade without sensory block", correct: false },
      { text: "It is not absorbed after surface application", correct: false },
      { text: "It has strong vasoconstrictor action", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not adverse effect of thalidomide?",
    answers: [
      { text: "Myocarditis", correct: true },
      { text: "Constipation", correct: false },
      { text: "Peripheral neuropathy", correct: false },
      { text: "Sedation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary risk associated with long-term opioid use?",
    answers: [
      { text: "Physical dependence and addiction", correct: true },
      { text: "Increased appetite", correct: false },
      { text: "Improved cognitive function", correct: false },
      { text: "Lowered blood pressure", correct: false },
      { text: "Increased energy levels", correct: false },
    ],
  },
  {
    question: "Which of the following statement  is about buspirone?",
    answers: [
      { text: "It has anxiolytic but no anticonvulsants or muscle relaxant property", correct: true },
      { text: "It interacts with benzodiazepine receptor as an inverse agonist", correct: false },
      { text: "It produces physical dependence and suppresses barbiturate withdrawal syndrome", correct: false },
      { text: "It is a rapidly acting anxiolytic: good for panic states", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 32 year old females, k/c/o depression, comes to you with drug overdosewith marked sedation, confusion and delirium. She has history of seizure at home after drug intake. On examination, you have found she is having ventricular arrhythmias, hypotension, and hyperthermia, flushing and dilated pupils. Which of the following drug has no role in treatment of above patient?",
    answers: [
      { text: "Flumazenil", correct: true },
      { text: "Phenylephrine", correct: false },
      { text: "Sodium bicarbonate", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following does not have a negative effect on patients taking MAO inhibitors?",
    answers: [
      { text: "Aspirin", correct: true },
      { text: "Indirect-acting sympathomimetics", correct: false },
      { text: "Tricyclic antidepressants", correct: false },
      { text: "Cheese", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 52-year-old unmarried woman suffers from breast cancer and is taking adjuvant hormonal therapy with tamoxifen 20 mg daily as a course of treatment. Her mother and two sisters have died due to breast cancer and she has also lost all hope of living due to her disease. As a physician, you want to improve her quality of life and would like to start her treatment with antidepressants. Which of the following is the best choice for this patient to start treatment with?",
    answers: [
      { text: "Venlafexine", correct: true },
      { text: "Fluoxetine", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "Duloxetine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following adverse effects of levodopa is not decreased by the addition of carbidopa?",
    answers: [
      { text: "Hallucinations", correct: true },
      { text: "Anorexia", correct: false },
      { text: "Cardiac arrhythmias", correct: false },
      { text: "Nausea and vomiting", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following crosses blood brain barrier?",
    answers: [
      { text: "Levodopa", correct: true },
      { text: "Dopamine", correct: false },
      { text: "Carvidopa", correct: false },
      { text: "Bromocriptine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug inhibits the production of stomach acid?",
    answers: [
      { text: "Proton pump inhibitors", correct: true },
      { text: "H2 blockers", correct: false },
      { text: "Both A and B", correct: false },
      { text: "Antimuscarinics", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The antiemetic action of metoclopramide is primarily due to which of the following actions?",
    answers: [
      { text: "02 antagonism", correct: true },
      { text: "02 agonism", correct: false },
      { text: "5HT3 antagonism", correct: false },
      { text: "5HT4 agonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a stool softener?",
    answers: [
      { text: "Docussates", correct: true },
      { text: "Bisacodyl", correct: false },
      { text: "Bran", correct: false },
      { text: "Lactulose", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 3 year old child comes to emergency with vomiting. Nurse posted in emergency gives antiemetic to baby which is generally gives to adult patient. After few hours of hospital stay, child vomiting is stopped but child body gone into spasm with high tone in leg and neck muscles. Which antiemetic that nurse might have given to baby leading to above complication?",
    answers: [
      { text: "Metoclopramide", correct: true },
      { text: "Domperidone", correct: false },
      { text: "Cisapride", correct: false },
      { text: "Aprepitant", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is one of the most common side effects of inhaled beclomethasone dipropionate?",
    answers: [
      { text: "Oropharyngeal candidiasis", correct: true },
      { text: "Pituitary-adrenal suppression", correct: false },
      { text: "Atrophic rhinitis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a side effect of salbutamol?",
    answers: [
      { text: "Hypoglycemia", correct: true },
      { text: "Hypokalemia", correct: false },
      { text: "Tremors", correct: false },
      { text: "Tachycardia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following actions is NOT exhibited by methylxanthines?",
    answers: [
      { text: "Restore steroid responsiveness in COPD patients", correct: true },
      { text: "Induction of histone deacetylase", correct: false },
      { text: "Anti-inflammatory action", correct: false },
      { text: "Inhibit the acetylation of core histones", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of H1 antihistamines?",
    answers: [
      { text: "Competitive antagonism of H1 receptors", correct: true },
      { text: "Direct stimulation of H1 receptors", correct: false },
      { text: "Inhibition of histamine synthesis", correct: false },
      { text: "nhibition of histamine release", correct: false },
      { text: "Non-competitive antagonism of H1 receptors", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of first-generation H1 antihistamines?",
    answers: [
      { text: "Insomnia", correct: true },
      { text: "Diarrhea", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Increased appetite", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a selective serotonin reuptake inhibitor (SSRI)?",
    answers: [
      { text: "Fluoxetine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Alprazolam", correct: false },
      { text: "Lithium", correct: false },
      { text: "Phenelzine", correct: false },
    ],
  },
  {
    question: "This drug is used in treating supraventricular tachycardias: ",
    answers: [
      { text: "Digoxin ", correct: true },
      { text: "Dobutamine", correct: false },
      { text: " Amrinone", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Verapamil", correct: false },
    ],
  },
  {
    question: "Which of the following most directly describes the mechanism of action of digitalis?",
    answers: [
      { text: "Inhibits sodium-potassiumATPase", correct: true },
      { text: "Decreases intracellular sodium concentration", correct: false },
      { text: "Increases the intracellular level of ATP", correct: false },
      { text: "Stimulates production of cAMP", correct: false },
      { text: "Decreases release of calcium from the sarcoplasmic reticulum", correct: false },
    ],
  },
  {
    question: "What effect does quinidine sulfate cause? ",
    answers: [
      { text: "antiarrhythmic", correct: true },
      { text: " antianginal", correct: false },
      { text: "cardiotonic", correct: false },
      { text: " analgesic", correct: false },
      { text: "hypertensive", correct: false },
    ],
  },
  {
    question: "This drug is a class IB antiarrhythmic drug:",
    answers: [
      { text: " lidocaine", correct: true },
      { text: "Sotalol", correct: false },
      { text: "Flecainide", correct: false },
      { text: " Salbutamol", correct: false },
      { text: "Propranolol ", correct: false },
    ],
  },
  {
    question: "Which of the following medications would be prescribed most frequently to patient suffering from chronic atrial fibrillation?",
    answers: [
      { text: "Warfarin", correct: true },
      { text: "Bretylium", correct: false },
      { text: "Adenosine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Specify an antiarrhythmic drug from the group of anesthetics.",
    answers: [
      { text: " lidocaine", correct: true },
      { text: "Hypertension", correct: false },
      { text: "cordarone", correct: false },
      { text: " verapamil", correct: false },
      { text: " lidocaine", correct: false },
    ],
  },
  {
    question: "Which one of the following adverse effects is associated with nitroglycerin?",
    answers: [
      { text: "Throbbing headache", correct: true },
      { text: "Elevated blood pressure", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Sexual dysfunction", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "Which one of the following is the most common side effect of antihyperlpidemic drug therapy?",
    answers: [
      { text: "Gastrointestinal disturbance", correct: true },
      { text: "Gastrointestinal disturbance", correct: false },
      { text: "Neurological problems", correct: false },
      { text: "Heart palpitations", correct: false },
      { text: "Migraine headaches", correct: false },
    ],
  },
  {
    question: "For what purpose is aspirin prescribed for myocardial infarction?",
    answers: [
      { text: "For inhibition of thromboxane synthesis, which prevents thrombus formation", correct: true },
      { text: "For reduction of serum lipid levels", correct: false },
      { text: "Due to the thrombolytic effect of aspirin", correct: false },
      { text: "For inhibition of cyclooxygenase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with hypertension and BP of 160/90 mmHg has elevated lipoprotein A levels. Which lipid-lowering drug would you prescribe?",
    answers: [
      { text: "Niacin", correct: true },
      { text: "Pitavastatin", correct: false },
      { text: "Fenofibrate", correct: false },
      { text: "Ezetimibe", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a Diuretic?",
    answers: [
      { text: "Conivaptan", correct: true },
      { text: "Budesonide", correct: false },
      { text: "Domperidone", correct: false },
      { text: "Cisapride", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following agents is useful for the oral treatment of both pituitary as well as renal diabetes insipidus?",
    answers: [
      { text: "Hydrochlorthiazide", correct: true },
      { text: "Vasopressin", correct: false },
      { text: "Chlorpropamide", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  drug approved is for heavy menstrual bleeding?",
    answers: [
      { text: "Tranexamic acid", correct: true },
      { text: "Mefenarnic acid", correct: false },
      { text: "Epsilon amino caproic acid", correct: false },
      { text: "Acetylsalicylic acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 36-year-old woman recently treated for leukemia is admitted to the hospital with malaise, chills, and high fever. Gram stain of the blood reveals gram-negative bacilli. The initial diagnosis is bacteremia, and parenteral antibiotics are indicated. The patient's history indicates that she has had severe urticaria, hypotension, and difficulty breathing after taking penicillin V orally about 6 months ago. Which of the following is the most appropriate drug?",
    answers: [
      { text: "Aztreonam", correct: true },
      { text: "Ampicillin plus sulbactum", correct: false },
      { text: "Cefazolin", correct: false },
      { text: "Imipenem plus cilastatin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Dr. Nitin decided to give oral iron therapy to a patient of iron deficiency anemia. Which of the following adverse effects leads to poor compliance of medicine by the patient?",
    answers: [
      { text: "Epigastric pain and bowel upset", correct: true },
      { text: "Staining of Teeth", correct: false },
      { text: "Black stools", correct: false },
      { text: "Metallic taste", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44 year old man presents to your clinic complaining of intense thirst and excessive urination for the past 2-3 months. The patient presents for consultation because he has had two episodes of bedwetting in the past week. On examination you notice that the patient has dry skin and also complains of mild constipation. You order fasting, random blood sugar levels and a bladder ultrasound, all of which are normal. You fixate on the diagnosis of diabetes insipidus. You would prefer to give him desmopressin intranasal spray instead of vasopressin. What is the reason for this?",
    answers: [
      { text: "Is more selective for the V2 receptor subtype", correct: true },
      { text: "Causes less hypernatremia", correct: false },
      { text: "Causes less factor VIII formation", correct: false },
      { text: "Provides greater relief from the excessive thirst experienced by the patient", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Urgent reversal of warfarin-induced bleeding is best achieved by the administration of ----",
    answers: [
      { text: "Prothrombin complex concentrates", correct: true },
      { text: "Cryoprecipitate", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Vitamin K1", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which CXCR-4 antagonist is used to mobilize peripheral blood stem cells?",
    answers: [
      { text: "Plerixafor", correct: true },
      { text: "Sargramostim", correct: false },
      { text: "Filgrastim", correct: false },
      { text: "Maraviroc", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to be used in young children with chronic renal failure?",
    answers: [
      { text: "Erythropoietin", correct: true },
      { text: "Desferrioxamine", correct: false },
      { text: "Cyanocobalamin", correct: false },
      { text: "Filgrastim (G-CSF)", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the difference between iron-sorbitol-citric acid and iron-dextran?",
    answers: [
      { text: "Cannot be administered intravenously", correct: true },
      { text: "Does not bind to transferrin in plasma", correct: false },
      { text: "Is not excreted in urine", correct: false },
      { text: "Causes fewer side effects", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not therapeutic uses of penicillin G? ",
    answers: [
      { text: "Rickettsial infection", correct: true },
      { text: "Bacterial meningitis", correct: false },
      { text: "Syphilis", correct: false },
      { text: "Anthrax", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following condition is not of choice drug Penicillin G ?",
    answers: [
      { text: "Lyme disease", correct: true },
      { text: "Actinomycosis", correct: false },
      { text: "Listeria infections", correct: false },
      { text: "Rat-bite fever", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug has been reported to have both Bacteriostatic activity and bactericidal activity against Streptococcus pneumoniae?",
    answers: [
      { text: "Tigecycline", correct: true },
      { text: "lsoniazid", correct: false },
      { text: "Daptomycin", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This inhibitor of bacterial protein synthesis has a narrow spectrum of antibacterial activity. It was used in the treatment of an abdominal abscess caused by Bacteroides fragilis, but antibiotic-associated colitis occurred. Which of the following drugs is being described?",
    answers: [
      { text: "Clindamycin", correct: true },
      { text: "Clarithromycin", correct: false },
      { text: "Minocycline", correct: false },
      { text: "Ticarcillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient infected with MRSA requires dialysis. The physician has already prescribed linezolid for the patient. On the day of dialysis, when should linezolid be administered to this patient?",
    answers: [
      { text: "After dialysis", correct: true },
      { text: "Before dialysis", correct: false },
      { text: "Can be administered independently of dialysis", correct: false },
      { text: "During dialysis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 54-year-old male who has been diagnosed with Renal failure presents with infectious symptoms, the following antibiotic is prescribed with full dose without modification. Identify the drug?",
    answers: [
      { text: "Doxycycline", correct: true },
      { text: "Vancomycin", correct: false },
      { text: "Gentamicin", correct: false },
      { text: "Amphotericin B", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Long-term use of which of the following drugs may be associated with the development of subacute myelooptic neuropathy (SMON)?",
    answers: [
      { text: "Quiniodochlor", correct: true },
      { text: "Diloxanide furoate", correct: false },
      { text: "Ernetin", correct: false },
      { text: "Furazolidone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the followinf is not used Dapsone? ",
    answers: [
      { text: "Schistosomiasis", correct: true },
      { text: "Pemphigo1d", correct: false },
      { text: "Pneumocystis jlroveci pneumonia", correct: false },
      { text: "Dermatitis herpet1formis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of sulfonamides?",
    answers: [
      { text: "Inhibition of folic acid synthesis", correct: true },
      { text: "Inhibition of cell wall synthesis", correct: false },
      { text: "Inhibition of protein synthesis", correct: false },
      { text: "Disruption of cell membrane", correct: false },
      { text: "Inhibition of DNA replication", correct: false },
    ],
  },
  {
    question: "Which of the following is a common adverse effect associated with sulfonamide use?",
    answers: [
      { text: "Stevens-Johnson syndrome", correct: true },
      { text: "Increased appetite", correct: false },
      { text: "Decreased heart rate", correct: false },
      { text: "Lowered blood pressure", correct: false },
      { text: "Increased blood sugar", correct: false },
    ],
  },
  {
    question: "Which of the following is the primary mechanism of action of quinolones?",
    answers: [
      { text: "Inhibition of DNA gyrase", correct: true },
      { text: "Inhibition of cell wall synthesis", correct: false },
      { text: "Inhibition of protein synthesis", correct: false },
      { text: "Disruption of cell membrane", correct: false },
      { text: "Inhibition of RNA gyrase", correct: false },
    ],
  },
  {
    question: "Which of the following is a common adverse effect associated with quinolone use?",
    answers: [
      { text: "Tendinitis and tendon rupture", correct: true },
      { text: "Hepatotoxicity", correct: false },
      { text: "Nephrotoxicity", correct: false },
      { text: "Ototoxicity", correct: false },
      { text: "Cardiotoxity", correct: false },
    ],
  },
  {
    question: "Which of the following is the most effective drug against extracellular mycobacteria?",
    answers: [
      { text: "Rifampin", correct: true },
      { text: "Isoniazid", correct: false },
      { text: "Pyrazinamide", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Based on which pharmacological feature is metronidazole selectively active against anaerobic and microaerophilic organisms?",
    answers: [
      { text: "Only anaerobes and microaerophiles reduce it by generating the reactive nitro radical", correct: true },
      { text: "Aerobes have an oxygen gradient within the cell that deactivates some of the metronidazole", correct: false },
      { text: "Aerobes have a drug efflux mechanism for metronidazole", correct: false },
      { text: "Metronidazole inserts pores into the cell membrane of anaerobes and microaerophiles", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is gametocidal for all malaria-causing species?",
    answers: [
      { text: "Primaquine", correct: true },
      { text: "Chloroquine", correct: false },
      { text: "Quinine", correct: false },
      { text: "dapsone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "If a drug is active against the pre-erythrocytic stage of the malaria parasite, how will the drug be useful?",
    answers: [
      { text: "Etiotropic prophylactic", correct: true },
      { text: "Suppressive prophylactic", correct: false },
      { text: "Clinical therapeutic", correct: false },
      { text: "Radical therapeutic", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which fungicidal drug can be used orally to treat onychomycosis?",
    answers: [
      { text: "Terbinafine", correct: true },
      { text: "Amphotericin B", correct: false },
      { text: "Clotrimazole", correct: false },
      { text: "Griseofulvin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main difference between fluconazole and ketoconazole?",
    answers: [
      { text: "It is unlikely to cause antiandrogen side effects", correct: true },
      { text: "It is a more potent inhibitor of drug metabolism", correct: false },
      { text: "It is ineffective in cryptococcal meningitis", correct: false },
      { text: "It is inactive when taken orally", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of dapsone, given that it is used in the treatment of leprosy, fungal infections, and for immunomodulatory action?",
    answers: [
      { text: "Folic acid synthesis inhibitor", correct: true },
      { text: "Cell wall synthesis inhibitor", correct: false },
      { text: "Phrotein synthesis inhibitor", correct: false },
      { text: "Cell membrane inhibitor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the site of action of amphotericin B in fungi?",
    answers: [
      { text: "Cell membrane", correct: true },
      { text: "Ribosome", correct: false },
      { text: "Nucleic acid", correct: false },
      { text: "Cytoplasm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used for prophylaxis of H1 N1 influenza virus infections?",
    answers: [
      { text: "Oseltamivir", correct: true },
      { text: "Abacavir", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Lamivudine is a nucleoside reverse transcriptase inhibitor (NRTI) and is a cytidine analogue. Which of the following drugs is also a cytidine analogue?",
    answers: [
      { text: "Emtricitabine", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Stavudine", correct: false },
      { text: "All of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the drug of choice for cytomegalovirus retinitis in patients with HIV?",
    answers: [
      { text: "Ganciclovir", correct: true },
      { text: "Acyclovir", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Foscarnet", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the drug of choice for herpes simplex virus infections?",
    answers: [
      { text: "Acyclovir", correct: true },
      { text: "Tenofovir", correct: false },
      { text: "Ganciclovir", correct: false },
      { text: "Abacavir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs inhibits de novo synthesis of purines?",
    answers: [
      { text: "Mycophenolate", correct: true },
      { text: "Tacrolimus", correct: false },
      { text: "Cyclosporine", correct: false },
      { text: "Infliximab", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  is antibody against Rituximab? ",
    answers: [
      { text: "CD 20", correct: true },
      { text: "EGER", correct: false },
      { text: "VEGF", correct: false },
      { text: "IL-2", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following immunosuppressants is not used for the treatment of cancers?",
    answers: [
      { text: "Cyclosporine", correct: true },
      { text: "Cyclophosphamide", correct: false },
      { text: "Methotrexate", correct: false },
      { text: "6- Mercaptopurine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not adverse effect of glucocorticoids?",
    answers: [
      { text: "Hypoglycemia", correct: true },
      { text: "Cataract", correct: false },
      { text: "Peptic ulcer", correct: false },
      { text: "Infections", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a widely used drug that suppresses cellular immunity, inhibits prostaglandin and leukotriene synthesis and increases the catabolism of lgG antibody?",
    answers: [
      { text: "Prednisone", correct: true },
      { text: "Cyclophosphamide", correct: false },
      { text: "Cyclosporine", correct: false },
      { text: "Lnfliximab", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A truck driver presented to the hospital with a minor soft tissue injury. Which of the following NSAID should not be prescribed to him?",
    answers: [
      { text: "Indomethacin", correct: true },
      { text: "Celecoxib", correct: false },
      { text: "Naproxen", correct: false },
      { text: "Diclofenac sodium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is incorrect about inhaled corticosteroids?",
    answers: [
      { text: "Chlorofluorocarbons (CFC) have higher output of aerosol particles compared to hydrofluoroalkane (HFA)", correct: true },
      { text: "Optimal respirable particle range is between 1-5 microns", correct: false },
      { text: "Higher particle size results in deposition in upper airways", correct: false },
      { text: "Smaller particles size will result in expelling out of drug during exhalation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is corticotrophin releasing hormone (CRH) preparation that is used in the testing I of HPA axis?",
    answers: [
      { text: "Corticorelin", correct: true },
      { text: "Gonadorelin", correct: false },
      { text: "Ganirelix", correct: false },
      { text: "Cosyntropin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An 18 month old child with ambiguous genitalia presented to the hospital. his BP is 118178 mm Hg, Serum K+ is 6 mEq/L, serum sodium is 120 mEq/L. Patient was started on l.V. fluids. What additional specific therapy will you add?",
    answers: [
      { text: "Hydrocortisone", correct: true },
      { text: "Potassium binding resin", correct: false },
      { text: "Digoxin", correct: false },
      { text: "Calcium gluconate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a characteristic of Estrogen?",
    answers: [
      { text: "Increases plasma LDL and decreases HDL and TG levels", correct: true },
      { text: "Induce synthesis of clotting factors II, VII, IX and X", correct: false },
      { text: "Induces NO synthase and PGl2 production in vascular endothelium", correct: false },
      { text: "Increase lithogenicity of bile", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs enhances binding of thyroxine to thyroxine binding globulin?",
    answers: [
      { text: "Estrogens", correct: true },
      { text: "Corticosteroids", correct: false },
      { text: "Salicylates", correct: false },
      { text: "Androgens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young female, Rama with amenorrhea, infertility and galactorrhoea was treated with a drug that successfully restored ovulation and menstruation. Before being given the drug, the woman was carefully questioned about previous mental health problems, which she did not have. She was advised to take the drug orally. Which of the following drug used to treat this patient was probably?",
    answers: [
      { text: "Bromocriptine", correct: true },
      { text: "Desmopressin", correct: false },
      { text: "Human gonadotropin hormone", correct: false },
      { text: "Leuprolide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 29 year old female came in to your clin ic with complaints of irregular periods, infertility and breast pain. After collecting relevant history, before doing the physical examination, as you suspect and consider hyperprolactinemia as your diagnosis, you ask if the patient is taking any of the following medications, except?",
    answers: [
      { text: "Bromocriptine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Reserpine", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug used to treat Type I Diabetes Mellitus ?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Metformin", correct: false },
      { text: "Sulfony1ureas", correct: false },
      { text: "Meglitinides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44 year old walks in to your clinic with complaints of increased hunger and thirst. On testing, was noted to have elevated blood sugar levels. Owing to the patient having a BMI of 31 Kg/m2, you prescribe him Metformin, which in turn?",
    answers: [
      { text: "Enhances glucose uptake by skeletal muscle", correct: true },
      { text: "Stimulates glycogenolysis", correct: false },
      { text: "Stimulates hepatic gluconeogenesis", correct: false },
      { text: "Releases insulin from beta cells of pancreas", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 43 year old male came in to your OPD with complaints of excessive thirst. After collecting history. You notice that the patient has polyuria and polyphagia. You suspect it could be OM and order for FBS, PP BS & HbA1 c. The HbA1c was about 12% and both the blood sugar values were over 240. You decide to start the patient on SIC Insulin therapy, and educate the patient regarding the same. What would you comment on its action.to the intern posted under you?",
    answers: [
      { text: "Stimulation of Enzymatic receptor   ", correct: true },
      { text: "Stimulation of lonotropic receptor", correct: false },
      { text: "Stimulation of Metabotropic receptor", correct: false },
      { text: "Stimulation of Nuclear receptor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a liquid dosage form?",
    answers: [
      { text: "Syrups", correct: true },
      { text: "Tablets", correct: false },
      { text: "Capsules", correct: false },
      { text: "Powders", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is only administered parenterally?",
    answers: [
      { text: "Injection solutions", correct: true },
      { text: "Tablets", correct: false },
      { text: "Capsules", correct: false },
      { text: "Suspensions", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a solid dosage form?",
    answers: [
      { text: "Tablets", correct: true },
      { text: "Suspensions", correct: false },
      { text: "Ointments", correct: false },
      { text: "Solutions", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of enteric-coated tablets?",
    answers: [
      { text: "Protect the drug from stomach acid", correct: true },
      { text: "Increase the rate of absorption", correct: false },
      { text: "Allow immediate release in the stomach", correct: false },
      { text: "Prevent side effects", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which stage of pharmacokinetics involves the drug entering the bloodstream?",
    answers: [
      { text: "Absorption", correct: true },
      { text: "Distribution", correct: false },
      { text: "Metabolism", correct: false },
      { text: " Excretion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the volume of distribution of a drug if the amount administered intravenously is 100 mg and the initial plasma concentration is 10 mg/L?",
    answers: [
      { text: "10 L", correct: true },
      { text: "15 L", correct: false },
      { text: "20 L", correct: false },
      { text: "30 L", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which term describes the ability of a drug to selectively act on specific receptors?",
    answers: [
      { text: "Affinity", correct: true },
      { text: "Selectivity", correct: false },
      { text: "Specificity", correct: false },
      { text: "Homeostasis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "65 year-old woman took 500 mg of acetaminophen to relieve an annoying headache. This dose is therapeutically effective for about 4 hours, and the half-life of acetaminophen is about 2 hours. How many hours would the medication be effective if the woman doubled the dose?",
    answers: [
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which term describes an unexpected, abnormal reaction to a drug that is not dose-related?",
    answers: [
      { text: "Idiosyncratic reaction", correct: true },
      { text: "Allergic reaction", correct: false },
      { text: "Dependence", correct: false },
      { text: "Toxicity", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug interaction results in a greater effect than the sum of each drug’s individual effects?",
    answers: [
      { text: "Synergism", correct: true },
      { text: "Idiosyncrasy", correct: false },
      { text: "Tolerance", correct: false },
      { text: "Resistance", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one 0f the following is characteristic of parasympathetic stimulation?",
    answers: [
      { text: "Contraction of sphincter muscle in the iris of the eye", correct: true },
      { text: "Decrease in intestinal motility", correct: false },
      { text: "Inhibition of bronchial secretion", correct: false },
      { text: "increase in heart rate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used to diagnosis of Myasthenia Gravis?",
    answers: [
      { text: "Edrophonium", correct: true },
      { text: "Neostigmine", correct: false },
      { text: "Succinylcholine", correct: false },
      { text: "Atropine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient was administered a neuromuscular blocker prior to a surgical procedure to produce skeletal muscle paralysis. This NMB drug effected small, rapidly contracting muscles of the face and eyes first and diaphragm muscle last. The effect of this drug was easily reversed with neostigmine. Which of the following NMB was most likely administered to this patient?",
    answers: [
      { text: " Rocuronium", correct: true },
      { text: "Succinylcholine", correct: false },
      { text: " Diazepam", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman requests an epidural to ease labor pains. She reports that she had an allergic reaching to Novocain at the dentist office. Which of the following local anesthetic would be appropriate for use in an epidural for this patient?",
    answers: [
      { text: " Ropivacaine", correct: true },
      { text: "Mepivacaine", correct: false },
      { text: "Chloroprocaine", correct: false },
      { text: "Tetracaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient in cardiogenic shock is given a beta-1 selective agonist to increase stroke volume. What drug was given?",
    answers: [
      { text: "Dobutamine", correct: true },
      { text: "Dopamine", correct: false },
      { text: "Epinephrine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44-year-old man is undergoing surgery on the fifth finger of his right hand. A local anesthetic without epinephrine is used because which of the following may cause epinephrine in this setting?",
    answers: [
      { text: "Gangrene", correct: true },
      { text: "Liver injury", correct: false },
      { text: "Methemoglobinemia", correct: false },
      { text: "Renal impairment", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 70-year-old patient was brought to the emergency room with blood pressure of 70/60 mmhg, tachycardia, and low cardiac output. He was diagnosed with acute heart failure. Which of the following drugs would be the most appropriate to improve his cardiac function?",
    answers: [
      { text: " Dobutamine", correct: true },
      { text: " Epinephrine", correct: false },
      { text: "Fenoldopam", correct: false },
      { text: " Isoproterenol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Substantial Bradycardia observed in the presence of inhaled anesthetics with this beta adrenergic receptor antagonist?",
    answers: [
      { text: "Timolol", correct: true },
      { text: "Labetalol", correct: false },
      { text: "Esmolol", correct: false },
      { text: "Propranolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following beta-blockers would cause maximum hypoglycemia?",
    answers: [
      { text: "Labetalol", correct: true },
      { text: "Atenolol", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Timolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 56 y.o. man ,recently diagnosed with exertional angina,started a therapy with propranolol.Which of the following cardiovascular parameters was most likely decreased in this patient?",
    answers: [
      { text: "Cardiac ejection fraction", correct: true },
      { text: "End systolic volume", correct: false },
      { text: "Ventricular ejection time", correct: false },
      { text: "End diastolic volume", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following anesthetic is used intravenously?",
    answers: [
      { text: "Propofol", correct: true },
      { text: "Halothane", correct: false },
      { text: "Amiodarone", correct: false },
      { text: " Propranolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a potent analgesic but a weak anesthetic?",
    answers: [
      { text: "Nitrous oxide", correct: true },
      { text: "Etomidate", correct: false },
      { text: "Halothane", correct: false },
      { text: " Midazolam", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "If 10  mg of morphine produce a greater analgesic response than can be achieved by ibuprofen at any dose, which of the following statements is correct?",
    answers: [
      { text: "Morphine is better drug to take for pain relief than ibuprofen ", correct: true },
      { text: "Morphine is full agonist, and ibuprofen is partial agonist", correct: false },
      { text: "Morphine is less potent than ibuprofen", correct: false },
      { text: "Morphine is less efficacious than is ibuprofen  ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young woman is brought to the emergency room. She is unconscious, and she has pupillary constriction and depressed respiration. Based on reports, an opioid overdose is almost certain. Which of the listed phenanthrene opioids will exhibit a full and immediate response to treatment with naloxone?",
    answers: [
      { text: "Morphine", correct: true },
      { text: "Meperidine", correct: false },
      { text: "Buprenorphine", correct: false },
      { text: " Fentanyl ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following is a short-acting hypnotic and better for sleep induction compared to sleep maintenance?",
    answers: [
      { text: "Zaleplon", correct: true },
      { text: " Flurazepam", correct: false },
      { text: "Temazepam", correct: false },
      { text: "Buspirone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antipsychotic agents is most associated with the possibility of a hematological dyscrasia such as agranulocytosis in a patient being treated for schizophrenia?",
    answers: [
      { text: "Lithium", correct: true },
      { text: "Buspirone", correct: false },
      { text: " Clozapine", correct: false },
      { text: "Asenapine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antipsychotic agents is considered to be the most potent and, thus, have the highest risk of extrapyramidal symptoms?",
    answers: [
      { text: "Fluphenazine", correct: true },
      { text: "Thioridazine", correct: false },
      { text: "Quetiapine", correct: false },
      { text: " Clozapine ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient Ravan having depressive disorder has taken 25 times the normal dose of amitriptyline. Which of the following is not likely to be observed in this patient?",
    answers: [
      { text: "Pinpoint pupil", correct: true },
      { text: "Coma and shock", correct: false },
      { text: "Hypotension", correct: false },
      { text: "Hot dry skin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug with antiviral properties can be used as an antiparkinsonian agent?",
    answers: [
      { text: "Amantadine", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Arbidol", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A child is experiencing absence seizures that interrupt his ability to pay attention during school and activities. Which of the following therapies would be most appropriate for this patient?",
    answers: [
      { text: "Ethosuximide", correct: true },
      { text: "Carbamazepine", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Watchful waiting", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following does not cause chronic treatment with omeprazole?",
    answers: [
      { text: "Hypergastrinemia", correct: true },
      { text: "Spontaneous bacterial peritonitis in patients with ascites", correct: false },
      { text: "Increased risk of bone fracture", correct: false },
      { text: "Vitamin B 12 Deficiency", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statement is about H2 receptor blockers?",
    answers: [
      { text: "They prevent stress ulcers in the stomach", correct: true },
      { text: "They are the most efficacious drugs in inhibiting gastric acid secretion", correct: false },
      { text: "They cause faster healing of duodenal ulcers", correct: false },
      { text: "They afford the most prompt relief of ulcer pain", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The success of oral rehydration therapy of diarrhea depends upon which of the following processes in the intestinal mucosa?",
    answers: [
      { text: "Glucose coupled Na+ absorption", correct: true },
      { text: "Sodium pump mediated Na+ absorption", correct: false },
      { text: "Bicarbonate coupled Na+ absorption", correct: false },
      { text: "Passive Na+ diffusion secondary to nutrient absorption", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient is admitted to the emergency department with signs of dehydration due to severe vomiting. The doctor gave the patient a parenteral medication, after which the patient began grimacing and posturing abnormally. Which drug could have caused this reaction?",
    answers: [
      { text: "Metoclopramid", correct: true },
      { text: "Ranitidine", correct: false },
      { text: "Atropine", correct: false },
      { text: "Domperidone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
    answers: [
      { text: "Corticosteroids have an anti-inflammatory effect.", correct: true },
      { text: "Corticosteroids act as an expectorant.", correct: false },
      { text: "Corticosteroids promote bronchodilation", correct: false },
      { text: "Corticosteroids decrease cough reflex", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug is used during prophylaxis and symptomatic relief of bronchial asthma and bronchospasm associated with chronic bronchitis & emphysema",
    answers: [
      { text: "Xanthines", correct: true },
      { text: "Albuterol", correct: false },
      { text: "Theophylline", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug works enhances reflex outflow of respiratory tract fluids by irritating gastric mucosa?",
    answers: [
      { text: "Decongestants", correct: true },
      { text: "Leukotrienes", correct: false },
      { text: "Beta2-adrenergic agonist", correct: false },
      { text: "Mass cell stablizers", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug can improve surfactant synthesis? ",
    answers: [
      { text: "bromhexine", correct: true },
      { text: " trypsin", correct: false },
      { text: "acetylcysteine", correct: false },
      { text: "potassium iodide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is possessing antagonistic action at histamine, serotonin and muscarinic receptors?",
    answers: [
      { text: "Cyclizine", correct: true },
      { text: "Cyproheptadine", correct: false },
      { text: "Terfenadine", correct: false },
      { text: "Promethazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following condition is treated with sumatriptan?",
    answers: [
      { text: "Migraine", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Depression", correct: false },
      { text: "Mania", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following most directly describes the mechanism of action of digitalis?",
    answers: [
      { text: "Inhibits sodium-potassiumATPase", correct: true },
      { text: "Decreases intracellular sodium concentration", correct: false },
      { text: "Increases the intracellular level of ATP", correct: false },
      { text: "Stimulates production of cAMP", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is cardiac glycoside?",
    answers: [
      { text: "Strophanthin", correct: true },
      { text: "Adrenaline ", correct: false },
      { text: "Caffeine", correct: false },
      { text: "Cordiamine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of sotalol in preventing ventricular and atrial arrhythmias?",
    answers: [
      { text: "It blocks K+ channels and β adrenergic receptors in ventricular myocytes.", correct: true },
      { text: "It blocks β adrenergic receptors in ventricular myocytes.", correct: false },
      { text: "It blocks Na+ channels in ventricular myocytes.", correct: false },
      { text: "It blocks Ca2+ channels in ventricular myocytes.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the rationale for the use of lidocaine in treating a patient with ventricular tachycardia?",
    answers: [
      { text: "It blocks Na+ channels in ventricular myocytes.", correct: true },
      { text: "It activates purinergic receptors in the AV node", correct: false },
      { text: "It blocks K+ channels in ventricular myocytes.", correct: false },
      { text: "It blocks Ca2+ channels in ventricular myocytes.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is of choice for acute treatment of ventricular tachycardias?",
    answers: [
      { text: "Lidocaine", correct: true },
      { text: "Sotalol ", correct: false },
      { text: " Flecainide ", correct: false },
      { text: "Verapamil ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old man recently diagnosed with atrial fibrillation started a therapy with atenolol, a beta-receptor blocker. Which of the following changes most likely occurred in cardiac beta receptors after 1-2 weeks of therapy?",
    answers: [
      { text: "Beta-receptor number increased in time", correct: true },
      { text: "Beta-receptor intrinsic activity decreased in time", correct: false },
      { text: "G-protein concentration decreased in time", correct: false },
      { text: "Spare beta-receptors become activated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs decreases de novo cholesterol synthesis by inhibiting the enzyme 3-hydroxy-3-methylglytaryl CoA reductase?",
    answers: [
      { text: "Lovastatin", correct: true },
      { text: "Cholestyramine", correct: false },
      { text: "Niacin", correct: false },
      { text: "Clofibrate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following is the most common side effect of antihyperlpidemic drug therapy?",
    answers: [
      { text: "Gastrointestinal disturbance", correct: true },
      { text: "Elevated blood pressure", correct: false },
      { text: "Neurological problems", correct: false },
      { text: "Migraine headaches", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which of the listed drugs used to prevent attacks of angina pectoris is a β-blocker?",
    answers: [
      { text: " metoprolol", correct: true },
      { text: " nitrogen", correct: false },
      { text: " dipyridamole", correct: false },
      { text: " nifedipine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with chronic exertional angina is refractory to combination therapy with a β blocker, organic nitrate, and Ca2+ channel blocker. Which of the following drugs may be use ul in reducing the symptoms of angina in this patient?",
    answers: [
      { text: "Ranolazine", correct: true },
      { text: "Heparin", correct: false },
      { text: "statin", correct: false },
      { text: " Aspirin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which is an appropriate choice for hypertension treatment during pregnancy?",
    answers: [
      { text: " Hydralazine", correct: true },
      { text: "Fosinopril", correct: false },
      { text: "Aliskiren", correct: false },
      { text: "Valsartan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following should be avoided in a patient with a history of severe anaphylactic reaction to sulfa medications?",
    answers: [
      { text: "Hydrochlorothiazide", correct: true },
      { text: " Amiloride", correct: false },
      { text: "Mannitol", correct: false },
      { text: "Spironolactone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the main effect of vikasol?",
    answers: [
      { text: "increased blood clotting", correct: true },
      { text: "lowering blood clotting", correct: false },
      { text: "enhancement of fibrinolysis", correct: false },
      { text: "increased permeability of the vascular wall", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main effect of aminocaproic acid?",
    answers: [
      { text: " inhibition of fibrinolysis", correct: true },
      { text: " increased fibrinolysis", correct: false },
      { text: "lowering blood clotting", correct: false },
      { text: "increased diuresis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An old man, Om prakash presented with anorexia, weakness and paraesthesia. On further investigation his hemoglobin came out to be 5.8 g% and the peripheral smear showed the presence of macrocytes and neutrophils having hypersegmented nuclei. His tendon reflexes also were sluggish. Endoscopy revealed atrophic gastritis. Deficiency of which of the following factors can lead to such a clinical situation?",
    answers: [
      { text: "Vitamin B12", correct: true },
      { text: "Folic acid", correct: false },
      { text: "Pyridoxine", correct: false },
      { text: "Riboflavin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For the treatment of what disease are prescribed: Iron, folic  acid and Vitamin B12?",
    answers: [
      { text: "Anaemia", correct: true },
      { text: "Haemophilia", correct: false },
      { text: "Haemodynamic shock", correct: false },
      { text: "Chronic malnutrition", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug increases absorption of iron from intestine?",
    answers: [
      { text: "Ascorbic acid", correct: true },
      { text: "Folic acid", correct: false },
      { text: "Cyanocobalamin", correct: false },
      { text: "Calcium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following clinical conditions, use of anticoagulants provide maximum benefit?",
    answers: [
      { text: "Prevention of venous thrombosis and pulmonary embolism", correct: true },
      { text: "Prevention of recurrences of myocardial infarction", correct: false },
      { text: "Cerebrovascular accident", correct: false },
      { text: "Anistreplase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following plasminogen activator can be administered as a single bolus dose for coronary thrombolysis?",
    answers: [
      { text: "Tenecteplase", correct: true },
      { text: "Alteplase", correct: false },
      { text: "Reteplase", correct: false },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Following a trans-Pacific flight from Australia, a 57-year-old man develops deep vein thrombosis in his right leg. He receives heparin to treat the DVT but after 6 days of heparin therapy he develops heparin-induced thrombocytopenia (HIT). What drug is he likely to receive instead of heparin?",
    answers: [
      { text: "Argatroban", correct: true },
      { text: "Rivaroxaban", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Dabigatran", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following side effect is specific to the beta-lactam group of antibiotics?",
    answers: [
      { text: "Allergic reactions", correct: true },
      { text: "Dysbacteriosis", correct: false },
      { text: "Neuropsychiatric disorders", correct: false },
      { text: "Severe kidney damage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is considered safe in pregnancy?",
    answers: [
      { text: " Amoxicillin", correct: true },
      { text: " Gentamicin", correct: false },
      { text: " Levofloxacin", correct: false },
      { text: "Doxycycline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug can cause tooth discoloration when given to young children?",
    answers: [
      { text: "Tetracyclines", correct: true },
      { text: " Lincosamides", correct: false },
      { text: " Macrolides", correct: false },
      { text: "Aminoglycosides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Aminoglycosides are primarily used for infections by what type of pathogen?",
    answers: [
      { text: " Gram negative bacteria only", correct: true },
      { text: " Gram positive bacteria only", correct: false },
      { text: " Gram negative and Gram positive bacteria", correct: false },
      { text: " Protozoa ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A senior dental surgeon is very much concerned about the systemic effect of the topically-used drugs for plaque prevention.Which of the following drugs will least be considered by him due to the same reason?",
    answers: [
      { text: "Clarithromycin", correct: true },
      { text: "Kanamycin", correct: false },
      { text: "Bacitracin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient has seasonal allergic rhinitis and is on terfenadine. He develops cardiac arrhythmias after a course of antibiotics. Which of the following antibiotic could have been given?",
    answers: [
      { text: "Erythromycin", correct: true },
      { text: "Cotrimoxazole", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following sulfa drug, poorly absorbed in the gastrointestinal tract?",
    answers: [
      { text: "phthalazole", correct: true },
      { text: "urosulfan", correct: false },
      { text: "sulfapyridazine", correct: false },
      { text: " sulfadimezin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Sulfonamides increase the risk of neonatal kernicterus. Which of the following condition describes this effect?",
    answers: [
      { text: "compete for bilirubin binding sites on plasma albumin", correct: true },
      { text: "inhibit the metabolism of bilirubin", correct: false },
      { text: "increase the turnover of red blood cells", correct: false },
      { text: "diminish the production of plasma albumin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following class of antibiotics is considered the first-line treatment for E. coli infections?",
    answers: [
      { text: "Fluoroquinolones", correct: true },
      { text: "Aminoglycosides", correct: false },
      { text: " Macrolides", correct: false },
      { text: "Tetracyclines", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is effective in the treatment of pneumonia caused by Pneumocystic carinii?",
    answers: [
      { text: "Co-trimoxazole", correct: true },
      { text: "Sulfacetamide", correct: false },
      { text: "Sulfasalazine", correct: false },
      { text: "Sulfisoxazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which FQN is used more to treat Pseudomonis aeruginosa?",
    answers: [
      { text: "Ciprofloxacin", correct: true },
      { text: "Nalidixic acid", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Moxifloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the side effect of quinolones?",
    answers: [
      { text: "Arthropathy", correct: true },
      { text: " Hearing loss", correct: false },
      { text: " Photosensitivity", correct: false },
      { text: "Metallic taste in mouth", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antimalarial drugs is a slow-acting red cell schizonticidal drug for the treatment of malaria?",
    answers: [
      { text: "Pyrimethamine", correct: true },
      { text: "Mefloquine", correct: false },
      { text: "Artemether", correct: false },
      { text: "Chloroquine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antimalarial drugs is most likely to cause an acute hemolytic reaction in patients with glucose-6-phosphate dehydrogenase deficiency?",
    answers: [
      { text: "Primaquine", correct: true },
      { text: "Clindamycin", correct: false },
      { text: "Mefloquine", correct: false },
      { text: "Dexamethasone and metyrapone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50 year old man with advanced tuberculosis has developed signs of severe acute adrenal insufficiency.Which of the following with combination of drugs the patient should be treated immediately?",
    answers: [
      { text: "Cortisol and fludrocortisone", correct: true },
      { text: "Triamcinolone and dexamethasone", correct: false },
      { text: "Aldosterone and fludrocortisone", correct: false },
      { text: "Sulfadoxine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 19-year-old man presents with a history of high fever with chills, headache, vomiting of 2 days duration.Upon laboratory investigation, he was noted to be positive for malarial blood smear. About 6 h after admission he developed an episode of generalized tonic-clonk seizures (GTCS) in the hospital with uprolling of eyes and frothing that lasted for about 5-6 min, followed by post-ictal confusion. Which of the following drug will you prefer in the management of this case?",
    answers: [
      { text: "Artesunate", correct: true },
      { text: "Chloroquine", correct: false },
      { text: "Primaquine", correct: false },
      { text: "Inhibition of heme polymerase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "lvermectin acts by?",
    answers: [
      { text: "Activation of Glutamate gated Chloride channels", correct: true },
      { text: "Inhibition of pyruvate ferridoxin oxidoreductase", correct: false },
      { text: "Inhibition of Nicotinic Acetycholine receptor", correct: false },
      { text: "None of these", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antifungal drugs does not inhibit ergosterol biosynthesis?",
    answers: [
      { text: "Amphotericin B", correct: true },
      { text: "Fluconazole", correct: false },
      { text: "Ketoconazole", correct: false },
      { text: "Piperazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug should not be combined with amphotericin B?",
    answers: [
      { text: "Atazanavir", correct: true },
      { text: "Ibuprofen", correct: false },
      { text: "Prednisolone", correct: false },
      { text: "Bexarotine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used topically to treat psoriasis?",
    answers: [
      { text: "Tazarotene", correct: true },
      { text: "Adapalene", correct: false },
      { text: "Alitretinoin", correct: false },
      { text: "Decreased zidovudine triphosphate formation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following common cause of resistance to zidovudine?",
    answers: [
      { text: "Mutations of reverse transcriptase", correct: true },
      { text: "Increased metabolism of the drug", correct: false },
      { text: "Increased efflux of the drug from inside  the cell", correct: false },
      { text: "Expression of inactivating enzymes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is most common cause of resistance to acyclovir in HSV-1?",
    answers: [
      { text: "Deficient viral thymidine kinase activity", correct: true },
      { text: "Mutation in viral DNA polymerase", correct: false },
      { text: "Induction of efflux pumps", correct: false },
      { text: "Didanosine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used to prevent HIV transmission from an HIV positive pregnant mother to child?",
    answers: [
      { text: "Nevirapine", correct: true },
      { text: "Stavudine", correct: false },
      { text: "Lamivudine", correct: false },
      { text: "Abciximab", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is an immune checkpoint inhibitor?",
    answers: [
      { text: "Durvalumab", correct: true },
      { text: "Denosumab", correct: false },
      { text: "Alemtuzumab", correct: false },
      { text: "Basiliximab", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following monoclonal antibodies is a humanized antibody?",
    answers: [
      { text: "Palivizumab", correct: true },
      { text: "Rituximab", correct: false },
      { text: "lnfliximab", correct: false },
      { text: "Small cell lung Ca", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following condition is used Axicabtagene ciloleucel?",
    answers: [
      { text: "Diffuse large B cell lymphoma", correct: true },
      { text: "Relapsed myeloma", correct: false },
      { text: "T cell lymphoma", correct: false },
      { text: "Filgrastim (G-CSF)", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An elderly woman is undergoing 4 cycles of chemotherapy for cancer. After the first cycle, she developed chemotherapy-induced thrombocytopenia. What is the appropriate next cycle of chemotherapy?",
    answers: [
      { text: "Oprelvekin", correct: true },
      { text: "Darbopoietin alfa", correct: false },
      { text: "Iron dextran", correct: false },
      { text: "Osteoporosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For which of the following condition hormone replacement therapy is not helpful?",
    answers: [
      { text: "Coronary heart disease", correct: true },
      { text: "Vaginal atrophy", correct: false },
      { text: "Flushing", correct: false },
      { text: "Ponatinib", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is Janus kinase inhibitor recently approved for use in rheumatoid arthritis?",
    answers: [
      { text: "Baricitinib", correct: true },
      { text: "Ruxolitinib", correct: false },
      { text: "Dasatinib", correct: false },
      { text: "Clonidine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug effective in managing acute gouty arthritisand ankylosing spondylitis; also accelerates closure of patent ductus arteriosus in premature infants?",
    answers: [
      { text: "indomethacin", correct: true },
      { text: "methotrexate", correct: false },
      { text: "phenylbutazone", correct: false },
      { text: "ketorolac", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Triiodothyronine (T3) as compared to T4",
    answers: [
      { text: "Is shorter acting", correct: true },
      { text: "Has delayed action", correct: false },
      { text: "Is less potent", correct: false },
      { text: "Aldosterone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the below mentioned steroids possesses maxinnum glucocorticoid activity when compared with the rest?",
    answers: [
      { text: "Dexamethasone", correct: true },
      { text: "Prednisolone", correct: false },
      { text: "Cortisol", correct: false },
      { text: "Inhibition of aldosterone synthesis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For what purpose is a synthetic glucocorticoid administered in the treatment of congenital adrenal hyperplasia due to 21 P-hydroxylase deficiency?",
    answers: [
      { text: "Suppression of ACTH secretion", correct: true },
      { text: "Prevention of hypoglycemia", correct: false },
      { text: "Restoration of normal immune function", correct: false },
      { text: "ls more plasma protein bound", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following is a synthetic estrogen used in oral contraceptives?",
    answers: [
      { text: "Mestranol", correct: true },
      { text: "Norgestrel", correct: false },
      { text: "Clomiphene", correct: false },
      { text: "Estradiol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following the mechanism of action of oxytocin?",
    answers: [
      { text: "Reduces the sensitivity of ion channels of myometrial cell membranes", correct: true },
      { text: "stimulates receptors for prostoglandins in the myometrium", correct: false },
      { text: "Blocks cholinergic receptors of the myometrium", correct: false },
      { text: "Stimulates adrenoreceptors of the myometrium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following hormonal agent has anti-inflammatory, antiallergic, immunosuppressive effects, increases blood glucose levels, stimulates the breakdown of proteins in muscles, causes redistribution of adipose tissue in the body?",
    answers: [
      { text: "Prednisolone", correct: true },
      { text: "Phenobolin", correct: false },
      { text: "DOXA", correct: false },
      { text: "Adrenalin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " A 29-year-old woman in her 41st wk of gestation had been in labor for 12 h. Although her uterine  contractions had been strong and regular initially, they had diminished in force during the past hour.Which of the following agents would be used to facilitate this woman’s labor and delivery?",
    answers: [
      { text: "Oxytocin", correct: true },
      { text: "Leuprolide", correct: false },
      { text: "Dopamine ", correct: false },
      { text: "Prolactin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What drug is used for hypoglycemic coma? ",
    answers: [
      { text: "adrenaline", correct: true },
      { text: "adiurecrin", correct: false },
      { text: " insulin", correct: false },
      { text: " glibutide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old man with diabetes presents to the outpatient clinic complaining of fatigue. On examination, you notice that he is pale and ask about the color of his stool, to which he replies that it has been black for the past few months. You immediately suggest an upper GI endoscopy, which reveals bleeding from esophageal varices. Which of the following drugs would you prescribe for this condition?",
    answers: [
      { text: " Octreotide", correct: true },
      { text: "Terlipressin", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Gestational diabetes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "On a fine day, you receive about 14 diabetic patients in your clinic, all there for their review. 5 of them, purely on a diet and following lifestyle modifications, and 2 more, on Metformin therapy, have not yet achieved control of the average blood sugar. You decide to add a medicine like glibenclamide to this population. It is important that you ensure which of the following candidates instead get a different medication?",
    answers: [
      { text: "Obese diabetics", correct: true },
      { text: "Type 1 diabetics", correct: false },
      { text: "Type 2 diabetics", correct: false },
      { text: "DM", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which dosage form is intended for local application on the skin?",
    answers: [
      { text: "Ointment", correct: true },
      { text: "Tablet", correct: false },
      { text: "Syrup", correct: false },
      { text: "Capsule", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following describes the route of administration through the skin?",
    answers: [
      { text: "Transdermal", correct: true },
      { text: "Intravenous", correct: false },
      { text: "Intramuscular", correct: false },
      { text: "Sublingual", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which dosage form is primarily designed for rectal administration?",
    answers: [
      { text: "Suppository", correct: true },
      { text: " Capsule", correct: false },
      { text: " Syrup", correct: false },
      { text: "Injection", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following best defines a generic drug?",
    answers: [
      { text: "Drug identical in dosage, safety, and efficacy to a branded drug", correct: true },
      { text: "Drug without therapeutic effect", correct: false },
      { text: "A non-chemical medicine", correct: false },
      { text: "Dietary supplement", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What affects the bioavailability of a drug?",
    answers: [
      { text: "Route of administration, liver metabolism, and digestive activity", correct: true },
      { text: "Only the route of administration", correct: false },
      { text: "Only distribution in the body", correct: false },
      { text: "Only the dose of the drug", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the loading dose of digoxin for an adult if it has a volume of distribution  of 7,3 L/kg,the plasma concentration needed is 1,5 mg/L,F=0,62?",
    answers: [
      { text: "1236 mg", correct: true },
      { text: "1320 mg", correct: false },
      { text: "1200 mg", correct: false },
      { text: "1246 mg", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which parameter describes drug activity in relation to its concentration?",
    answers: [
      { text: "Dose-response", correct: true },
      { text: "Bioavailability", correct: false },
      { text: "Distribution", correct: false },
      { text: "Absorption", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Two new drugs ,A and B ,are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy.Which of the following pairs of statements best describes A and B?",
    answers: [
      { text: "A full agonist,B full agonist", correct: true },
      { text: "A full agonist,B partial agonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
      { text: "A partial agonist,B noncompetitive antagonist", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What type of drug interaction occurs when two drugs have opposite effects on the body?",
    answers: [
      { text: "Antagonistic interaction", correct: true },
      { text: "Synergistic interaction", correct: false },
      { text: "Potentiating interaction", correct: false },
      { text: "Additive interaction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main concern with drugs that have a narrow therapeutic index?",
    answers: [
      { text: "Small difference between therapeutic and toxic doses", correct: true },
      { text: "Ineffectiveness at low doses", correct: false },
      { text: "High production costs", correct: false },
      { text: "Prolonged onset of action", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which of the following receptors are located in the sympathetic nervous system?",
    answers: [
      { text: " M", correct: true },
      { text: "B1", correct: false },
      { text: "B2", correct: false },
      { text: " A2", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following type of drugs will be useful in treating the symptoms of myasthenia gravis?",
    answers: [
      { text: "Anticholinesterase agents ", correct: true },
      { text: "Adrenergic agonist", correct: false },
      { text: "Muscarinic agonist", correct: false },
      { text: "Nicotinic antagonist", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient was administered a NMB prior to a surgical procedure to produce skeletal muscles paralysis. This NMB drug caused initial skeletal muscle fasciculations before the onset of paralysis. The effect of this drug could not be reversed with neostigmine. Which of the following NMB was most likely administered to this patient?",
    answers: [
      { text: "Succinylcholine", correct: true },
      { text: "Cisatracurium", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which of the following drugs can cause methemoglobinemia when used in larger doses for regional anesthesia?",
    answers: [
      { text: "Prilocaine", correct: true },
      { text: " Procaine", correct: false },
      { text: "Bupivacaine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following tissues both alfa and beta1 adrenergic stimulation produces the same effect? ",
    answers: [
      { text: "Intestine ", correct: true },
      { text: "Blood vessels ", correct: false },
      { text: "Uterus ", correct: false },
      { text: "Prostate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs causes bronchodilation without significant cardiac stimulation?",
    answers: [
      { text: "Terbutaline ", correct: true },
      { text: "Epinephrine ", correct: false },
      { text: " Isoprenaline", correct: false },
      { text: "Methoxamine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following sympathomimetics is preferable for the treatment of chronic orthostatic hypotension? ",
    answers: [
      { text: "Ephedrine ", correct: true },
      { text: "Epinephrine ", correct: false },
      { text: " Norepinephrine ", correct: false },
      { text: "Terbutaline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old female started on a new antihypertensive medication recently. Her blood pressure seems to be under control, but she complains of fatigue, drowsiness, and fainting when she gets up from the bed. Which of the following drugs is she most likely taking?",
    answers: [
      { text: "Prazosin", correct: true },
      { text: " Propranolol", correct: false },
      { text: "Metoprolol", correct: false },
      { text: " Clonidine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following adrenergic drugs given by IV infusion car decrease total peripheral resistance at lower doses and increase it at higher doses?",
    answers: [
      { text: "Dopamine", correct: true },
      { text: "Isoproterenol", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following beta-blockers would cause maximum hypoglycemia?",
    answers: [
      { text: "Labetalol", correct: true },
      { text: "Timolol", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Atenolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "With prolonged use in seizure states, which of the following drugs can cause coarsening of facial features, hirsutism, gingival hyperplasia and osteomalacia?",
    answers: [
      { text: "Phenytoin", correct: true },
      { text: "Ethosuximide", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "Valproic acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statement about fentanyl is correct?",
    answers: [
      { text: "Fentanyl is 100 tames mere potent than morphine", correct: true },
      { text: "Its most effect by oral administration", correct: false },
      { text: "Its most effect by peroral ", correct: false },
      { text: "Its withdrawal symptoms can be relieved by naloxone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In the presence of naloxone, a higher concentration of morphine is required to elicit full pain relief. Naloxone by itself has no effect. Which of the following is correct regarding these medications?",
    answers: [
      { text: "Naloxone is a competitive antagonist", correct: true },
      { text: "Morphine is less efficacious than is naloxone", correct: false },
      { text: "Morphine is less potent than is naloxone", correct: false },
      { text: "Naloxone is a noncompetitive antagonist  ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 76-year-old female with renal insufficiency presents to the clinic with sever pain secondary to a compression fracture in the lumbar spine. She reports that the pain has been uncontrolled with tramadol., and it is decided to start treatment with an opioid. Which of the following is the best opioid for this patient?",
    answers: [
      { text: "Hydrocodone", correct: true },
      { text: "Morphine", correct: false },
      { text: " Meperidine", correct: false },
      { text: "Buprenorphine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following agents has a rapid anxiolytic effect  and would be best for the acute management of anxiety?",
    answers: [
      { text: "Lorazepam", correct: true },
      { text: "Buspirone", correct: false },
      { text: "Venlafaxine", correct: false },
      { text: "Duloxetine ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which agent is best used in the emergency room setting for patients who are believed to have received too much of a benzodiazepine drug or taken an overdose of benzodiazepines?",
    answers: [
      { text: "Flumazenil", correct: true },
      { text: "Ramelteon", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Doxepin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young woman, Rama, with amenorrhea, infertility and galactorrhea was treated with a drug that successfully restored ovulation and menstruation. Before giving her the drug, the woman was carefully questioned about previous mental health problems, which she did not have. Which drug was she advised to take orally?",
    answers: [
      { text: "Human gonadotropic hormone", correct: true },
      { text: "Desmopressin", correct: false },
      { text: "Leuprolide", correct: false },
      { text: "Bromocriptine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 51-year-old woman with symptoms of major depression also has angle-closure glaucoma. Which of the following antidepressants should be avoided in this patient?",
    answers: [
      { text: "Amitriptyline ", correct: true },
      { text: "Sertraline", correct: false },
      { text: " Bupropion", correct: false },
      { text: "Mirtazapine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old man suffering from bipolar disorder started a therapy which included lithium, two tablets daily. Which of the following adverse effects might most likely occur during the first days of therapy?",
    answers: [
      { text: "Edema", correct: true },
      { text: "Insomnia", correct: false },
      { text: "Constipation", correct: false },
      { text: "Hypertension", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 75-year-old woman had a stroke approximately 1 month ago. She is continuing to have small focal seizures where she fails to respond appropriately while talking. Which of the following is the most appropriate treatment for this individual?",
    answers: [
      { text: " Levetiracetam", correct: true },
      { text: "Oxcarbazepine", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Phenobarbital", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following of drugs against Helicobacter pylori?",
    answers: [
      { text: "Metronidazole", correct: true },
      { text: " Tetracycline", correct: false },
      { text: "Emetine", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug is the primary treatment for acid-related disease in pregnancy?",
    answers: [
      { text: "Sucralfate", correct: true },
      { text: "Prostaglandins", correct: false },
      { text: "Omeoprazole", correct: false },
      { text: "Calcium carbonate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug approved for managing postoperative nausea and/or vomiting?",
    answers: [
      { text: "Ondansetron", correct: true },
      { text: "Granisetron", correct: false },
      { text: "Meclizine", correct: false },
      { text: "Lorazepam", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is given in combination regimens to enhance antiemetic potency?",
    answers: [
      { text: "Dexamethasone", correct: true },
      { text: "Ondansetron", correct: false },
      { text: "Granisetron", correct: false },
      { text: "Meclizine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which of the drugs used to treat bronchial asthma is a myotropic bronchodilator?",
    answers: [
      { text: "aminophylline", correct: true },
      { text: "ephedrine", correct: false },
      { text: " salbutamol", correct: false },
      { text: " isadrine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old woman has occasional asthma symptoms during the winter when she goes snowshoeing.Which of the following medication of choice to relieve her asthma symptoms is inhaled?",
    answers: [
      { text: "Albuterol", correct: true },
      { text: "Iloprost.", correct: false },
      { text: "Budesonide", correct: false },
      { text: "Salmeterol.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In case of an overdose of which antitussive drug, depression of the respiratory center is possible? ",
    answers: [
      { text: "codeine", correct: true },
      { text: " falimimint", correct: false },
      { text: " libexin", correct: false },
      { text: "bronholitin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug is used during prophylaxis and symptomatic relief of bronchial asthma and bronchospasm associated with chronic bronchitis & emphysema?",
    answers: [
      { text: "Xanthines", correct: true },
      { text: "Albuterol", correct: false },
      { text: "Theophylline", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which of the following statements is true about \"latanoprost?",
    answers: [
      { text: "It is PGF2a derivative used in glaucoma", correct: true },
      { text: "It is selective al blocker used in benign hypertrophy of prostate", correct: false },
      { text: "It is a 5a reductase inhibitor used to reduce the size of enlarged prostate gland", correct: false },
      { text: "It is a PGE2 analogue used intravaginally for cervical primin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following can reverse one or more smooth muscle effects of circulating histamine in humans?",
    answers: [
      { text: "Adrenaline", correct: true },
      { text: "Granisetron", correct: false },
      { text: "Ranitidine ", correct: false },
      { text: "Sumatriptan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs would be the most appropriate single drug therapy for mild congestive heart failure?",
    answers: [
      { text: "An ACE inhibitor,such as captopril", correct: true },
      { text: "A cardiac glycoside such as digoxin", correct: false },
      { text: "A vasodilator such as hydralazine", correct: false },
      { text: "A diuretic such as hydrochlorothiazide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following aggravates a digitalis-induced arrhythmia?",
    answers: [
      { text: "Decreased serum potassium", correct: true },
      { text: "Decreased serum sodium", correct: false },
      { text: "Decreased heart rate with propranolol", correct: false },
      { text: "Decreased serum calcium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 52-year-old woman with atrial fibrillation is prescribed apixaban. What is the mechanism of action of this oral anticoagulant?",
    answers: [
      { text: "It directly inhibits factor Xa.", correct: true },
      { text: "It blocks the synthesis of active clotting actors.", correct: false },
      { text: "It indirectly inhibits factor Xa by activating antithrombin.", correct: false },
      { text: "It indirectly inhibits thrombin by activating antithrombin.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antiarrhythmic drugs belongs to calcium channel blockers?",
    answers: [
      { text: " verapamil", correct: true },
      { text: "cordarone", correct: false },
      { text: " inderal", correct: false },
      { text: " lidocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 73-year-old man with a history of surgery for a benign thyroid nodule when he was 50 years old is now euthyroid but has developed a cardiac arrhythmia. Which of the antiarrhythmic drugs listed below might cause him to develop iodine-induced hypothyroidism?",
    answers: [
      { text: "Amiodarone", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Quinidine", correct: false },
      { text: "Digoxin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50 y.o. patient is having propranolol due to his cardiac problems but his physician now wants to stop this drug. Which of the following is the most important reason for this step?",
    answers: [
      { text: "Partial AV heart block", correct: true },
      { text: "Mild hypertension", correct: false },
      { text: "Angina pectoris", correct: false },
      { text: "Familiar tremor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug binds bile acids in the intestine, thus preventing their return to the liver via the enterohepatic circulation?",
    answers: [
      { text: "Cholestyramine", correct: true },
      { text: "Clofibrate", correct: false },
      { text: "Niacin", correct: false },
      { text: "Probucol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs causes a decrease in plasma triacylglycerol levels by increasing the activity of lipoprotein lipase?",
    answers: [
      { text: "Clofibrate", correct: true },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "Lovastatin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which group of drug: They have an antianginal effect. Increase the delivery of oxygen to the heart and reduce the need for myocardial oxygen. It is used for coronary insufficiency.",
    answers: [
      { text: " nitrates", correct: true },
      { text: "β-adrenomimetics", correct: false },
      { text: "ganglion blockers", correct: false },
      { text: "cardiac glycosides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following an antianginal agent, an organic nitrate with a longer duration of action than nitroglycerin?",
    answers: [
      { text: "nitrosorbide", correct: true },
      { text: " nifedipine", correct: false },
      { text: "dipyridamole ", correct: false },
      { text: "validol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is antihypertensive?",
    answers: [
      { text: " clonidine", correct: true },
      { text: "naphthyzine", correct: false },
      { text: "mezaton", correct: false },
      { text: " cordiamine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which of the following drug uses to acute pulmonary edema?",
    answers: [
      { text: "Furosemide", correct: true },
      { text: "Chlorothiazide", correct: false },
      { text: "Amiloride", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which dietary component is needed for the synthesis of DNA and influences the production of RBCs?",
    answers: [
      { text: "Folic acid", correct: true },
      { text: "Vitamin K", correct: false },
      { text: "Iron", correct: false },
      { text: "Calcium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main effect of neodicumarin?  ",
    answers: [
      { text: "lowering blood clotting.", correct: true },
      { text: "stimulation of fibrinolysis", correct: false },
      { text: "stimulation of blood clotting", correct: false },
      { text: "stimulation of leukopoiesis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug used for pernicious anemia?",
    answers: [
      { text: "Cyanocobalamin", correct: true },
      { text: "Ferrous lactate", correct: false },
      { text: "Iron dextrane", correct: false },
      { text: "Vitamin K", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which of the following drugs is used to treat hypochromic anemia?",
    answers: [
      { text: " iron lactate", correct: true },
      { text: "folic acid", correct: false },
      { text: " ethacric acid", correct: false },
      { text: "cyanocobalamin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following clinical conditions is the use of anticoagulants most beneficial?",
    answers: [
      { text: "Prevention of venous thrombosis and pulmonary embolism", correct: true },
      { text: "Prevention of recurrent myocardial infarction", correct: false },
      { text: "Retinal artery thrombosis", correct: false },
      { text: "Stroke", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is not used for thromboprophylaxis?",
    answers: [
      { text: "Warfarin", correct: true },
      { text: "Aspirin", correct: false },
      { text: "Heparin", correct: false },
      { text: "Antithrombin III", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs, when prescribed concurrently with heparin, could lead to an increased chance of hemorrhage?",
    answers: [
      { text: "Aspirin", correct: true },
      { text: "Vitamin K", correct: false },
      { text: "Iron", correct: false },
      { text: "Folic acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What drug is considered the first choice in the prevention of thromboembolism in pregnancy?",
    answers: [
      { text: "Dalteparin", correct: true },
      { text: "Warfarin", correct: false },
      { text: "Heparin", correct: false },
      { text: "Streptokinasa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Penicillin us used to treat what type of microbe?",
    answers: [
      { text: " Gram positive and Gram negative", correct: true },
      { text: "Gram negative bacteria only", correct: false },
      { text: " Gram positive bacteria only", correct: false },
      { text: "Fungal infections", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following group of antibiotics that has a β-lactam ring in its structure?",
    answers: [
      { text: "cephalosporins", correct: true },
      { text: "tetracyclines", correct: false },
      { text: " lincosamides", correct: false },
      { text: "macrolides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The tetracyclines are a group of widely used broad spectrum antibiotics. Antimicrobial activity of tetracyclines involves which of the following mechanisms?",
    answers: [
      { text: "Inhibition of microbial protein synthesis", correct: true },
      { text: "Inhibition of microbial DNA gyrase", correct: false },
      { text: "Inhibition of microbial cell wall synthesis", correct: false },
      { text: "Inhibition of microbial folic acid synthesis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is contraindicated in pregnant women and small children due to it's tendency to irreversibly stain developing teeth?",
    answers: [
      { text: " Tetracyclines", correct: true },
      { text: "Fluoroquinolones", correct: false },
      { text: "Quinolines", correct: false },
      { text: "Macrolides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "THE PATIENT COMPLAINED OF ABDOMINAL PAIN, DIARRHEA. AFTER TAKING AN ANALYSIS FROM HIM, A LOT OF PATHOGENIC MICROFLORA WAS FOUND. WHICH ORAL ANTIBACTERIAL DRUG MAY PRESCRIBED TO HIM?",
    answers: [
      { text: "TETRACYCLINE", correct: true },
      { text: "AZITHROMOCINE", correct: false },
      { text: "GENTAMICINE", correct: false },
      { text: "CEFASOLINE", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 58-year-old male with a history of hepatitis C, cirrhosis, and ascites presents with spontaneous bacterial peritonitis. Which of the following antibiotics requires close monitoring and dosing adjustment in this patient given his liver disease?",
    answers: [
      { text: "Erythromycin", correct: true },
      { text: " Tobramycin", correct: false },
      { text: " Penicillin G", correct: false },
      { text: " Vancomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of sulfadimezin?",
    answers: [
      { text: "disrupts the formation of folic acid (FC) by microbial cells", correct: true },
      { text: " inhibits folate reductase and impedes the formation of tetrahydro-folic acid", correct: false },
      { text: " inhibits DNA-dependent RNA polymerase", correct: false },
      { text: "violates the correct reading of the genetic code", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In the tratment of a urinary tract infection in a patient known to have a deficiency of glucose-6-phosphate dehydrogenase, it would not be advisable to prescribe which of the following?",
    answers: [
      { text: "Sulfonamide", correct: true },
      { text: "Amoxicillin", correct: false },
      { text: "Cephalexin", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used in the treatment of ulcerative colitis?",
    answers: [
      { text: "Sulfasalazine", correct: true },
      { text: "Sulfacetamide", correct: false },
      { text: "Co-trimoxazole", correct: false },
      { text: "Sulfisoxazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used in eye infections because of its high aqueous solubility, and non-irritating nature?",
    answers: [
      { text: "Sulfacetamide", correct: true },
      { text: "Sulfamethoxazole", correct: false },
      { text: "Sulfadiazine", correct: false },
      { text: "Sulfazoxazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following class of antibiotics is considered the first-line treatment for E. coli infections?",
    answers: [
      { text: "Fluoroquinolones", correct: true },
      { text: " Aminoglycosides", correct: false },
      { text: " Macrolides", correct: false },
      { text: "Tetracyclines", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Ciprofloxacin belongs to what class of antibiotic?",
    answers: [
      { text: "Fluoroquinolones", correct: true },
      { text: "Macrolides", correct: false },
      { text: " Tetracyclines", correct: false },
      { text: " Macrolides ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Mycobacterium tuberculosis nicotinamidase is involved in the activation of the following antitubercular drug:",
    answers: [
      { text: "Pyrazinamide", correct: true },
      { text: " Ethambutol", correct: false },
      { text: "lsoniazid", correct: false },
      { text: "Clindamycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  is LEAST likely to be effective in the treatment with Metronidazole?",
    answers: [
      { text: "Pneumocystis", correct: true },
      { text: "Infection caused by B. fragilis", correct: false },
      { text: "Pseudomembranous colitis", correct: false },
      { text: "Hepatic amebiasis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 38 year old patient has come to you with fever, myalgias, skin rashes, arthralgias and arthritis. Further he gives history that above symptoms occur whenever he start a drug prescribed for his illness and the same is needed to taken for a long time period. He also adds that his symptoms gradually resolves after discontinuation of the same drug but reappear after re challenge. On laboratory examination, anti nuclear antibodies(ANA) and anti histone antibody level comes out to be high. As a treating physician, you would like to rule out all of the following drug as causative agent of above problem except",
    answers: [
      { text: "Pyrazinamide", correct: true },
      { text: "Dapsone", correct: false },
      { text: "Procainamide", correct: false },
      { text: "Para amino salicylic acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 7-year-old girl is admitted to the hospital with high fever and nuchal rigidity, later diagnosed with meningococcal meningitis. Which of the following drugs would most likely be given prophylactically to her 10 year old sister?",
    answers: [
      { text: "Rifampin", correct: true },
      { text: "Isoniazid", correct: false },
      { text: "Amikacin", correct: false },
      { text: "Piperacillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements best explain the mechanism of antifungal action of amphotericin B?",
    answers: [
      { text: "Impairment of the normal permeability of fungal cell membrane", correct: true },
      { text: "Inhibition of reverse transcriptase", correct: false },
      { text: "Blockade of fungal mitosis", correct: false },
      { text: "Inhibition of fungal cytochrome P450 enzymes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an antifungal drug that acts by inhibiting fungal DNA synthesis?",
    answers: [
      { text: "Flucytosine", correct: true },
      { text: "Ketoconazole", correct: false },
      { text: "Cytarabine", correct: false },
      { text: "Fluorouracil", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which anthelmintic drug is considered more effective against blood fluke, liver fluke, lung fluke and cysticercus?",
    answers: [
      { text: "Praziquantel", correct: true },
      { text: "Albendazole", correct: false },
      { text: "Ivermectin", correct: false },
      { text: "Thiabendazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the dosage of a single dose of Albendazole prescribed to a child of 10 yrs for treatment of roundworm infestation?",
    answers: [
      { text: "400mg", correct: true },
      { text: "200 mg", correct: false },
      { text: " 1 g", correct: false },
      { text: "2g", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "More than 90% of this drug is excreted unchanged in the urine. Because its solubility in urine is low. To prevent nephrotoxicity of which drug should patients be well hydrated?",
    answers: [
      { text: "Acyclovir", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Indinavir", correct: false },
      { text: "Amantadine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient was found to be HIV positive on routine checkup . He has no symptoms and CD4 count is 800 cells per cubic mm. What should be the management of this patient?",
    answers: [
      { text: "Tenovofir plus lamivudine plus efavirenz for life long", correct: true },
      { text: "No treatment is required", correct: false },
      { text: "Zidovudine plus stavudine for 28 day", correct: false },
      { text: "Tenovofir plus zidovudine plus lamivudine for life long", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements about acyclovir is false?",
    answers: [
      { text: "Acyclovir does not penetrate into the cerebrospinal fluid", correct: true },
      { text: "Nephrotoxicity is a dose-limiting side effect of acyclovir", correct: false },
      { text: "Valaciclovir has higher bioavailability than acyclovir", correct: false },
      { text: "Acyclovir is a related nucleoside", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "When is ganciclovir preferable to acyclovir?",
    answers: [
      { text: "Cytomegalovirus retinitis in AIDS patients", correct: true },
      { text: "Shingles", correct: false },
      { text: "Chickenpox", correct: false },
      { text: "Herpetic keratitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which anticancer drug causes cerebellar ataxia?",
    answers: [
      { text: "Cytarabine", correct: true },
      { text: "Chloramphenicol", correct: false },
      { text: "Cyclophosphamide", correct: false },
      { text: "Irinotecan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of following statements is not about 6-mercaptopurine?",
    answers: [
      { text: "It does not cause hyperuricemia", correct: true },
      { text: "It is metabolized by xanthine oxidase", correct: false },
      { text: "Its dose should be reduced when allopurinol is given concurrently", correct: false },
      { text: "It is an active metabolite of azathioprine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 47-year old male, Kishore exhibited signs and symptoms of acromegaly. Radiologic studies showed the presence of a large pituitary tumor. Surgical treatment of the tumor was only partia lly effective in controlling the disease. At this point, which of the following drugs is most likely to' be used as pharmacological therapy?",
    answers: [
      { text: "Octreotide", correct: true },
      { text: "Desmopressin", correct: false },
      { text: "Nafarelin", correct: false },
      { text: "Somatropin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a prodrug?",
    answers: [
      { text: "Prednisone", correct: true },
      { text: "Prednisolone", correct: false },
      { text: "Methylprednisolone", correct: false },
      { text: "Both A and B", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a characteristic of Rofecoxib as compared to indomethacin?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Not likely to produce renal complications", correct: false },
      { text: "Less likely to cause gastric ulcer and their complications", correct: false },
      { text: "Likely to be more effective in rheumatoid arthritis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used in the treatment of rheumatoid arthritis?",
    answers: [
      { text: "Naproxen", correct: true },
      { text: "Allopurinol", correct: false },
      { text: "Colchicine", correct: false },
      { text: "Sulfinpyrazone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is not natural?",
    answers: [
      { text: "Ethinylestradiol", correct: true },
      { text: "Estradiol", correct: false },
      { text: "Estriol", correct: false },
      { text: "Estrone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In cases of hyperthyroidism, most of the effects mediated by the increased hormone levels is due toperipheral conversion ofT4 to 13. Which of the following medications lnhibit5'-deiodinase?",
    answers: [
      { text: "Propylthiouracil", correct: true },
      { text: "Methimazole", correct: false },
      { text: "Lugol's iodine", correct: false },
      { text: "Radioactive iodine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Levothyroxine/liothyronine acts by binding to thyroid receptors. Thyroid hormone receptors belong to the which of the following class of receptors?",
    answers: [
      { text: "Nuclear receptor", correct: true },
      { text: "Transmembrane receptor linked to tyrosine kinase", correct: false },
      { text: "Ion channel receptor", correct: false },
      { text: "G protein coupled receptor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main effect of oxytocin?",
    answers: [
      { text: "increasing the contractile function of the uterus", correct: true },
      { text: " decrease in the contractile function of the uterus", correct: false },
      { text: "lowering blood sugar.", correct: false },
      { text: "decrease in blood sugar", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug increases the predominantly contractile activity of the uterus?  ",
    answers: [
      { text: "oxytocin", correct: true },
      { text: " fenoterol", correct: false },
      { text: " ergotamine", correct: false },
      { text: " cotarnin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug has a hypoglycemic effect, promotes the penetration of glucose into cells and its utilization, ineffective when taken orally?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "adrenaline", correct: false },
      { text: "Glucagon", correct: false },
      { text: "Glybutide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug increases contractile function of the uterus.They enhance mainly rhythmic activity. Efficacy depends on the presence and duration of pregnancy.Used of weak labor.When taken orally it is ineffective due to destruction in the gastrointestinal tract?",
    answers: [
      { text: "Oxytocin", correct: true },
      { text: "Dinoprost", correct: false },
      { text: "Ergometrin", correct: false },
      { text: "Prozerin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following insulines is rapid and long acting Insulin?",
    answers: [
      { text: "Insulin glargine", correct: true },
      { text: "Insulin aspart", correct: false },
      { text: "Insulin exubera", correct: false },
      { text: "Insulin lispro", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to cause hypoglycemia when used as monotherapy in the treatment of type 2 diabetes?",
    answers: [
      { text: " Glipizide", correct: true },
      { text: "Acarbose", correct: false },
      { text: "Metformin", correct: false },
      { text: "Rosiglitazone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44 year old walks in to your clinic with complaints of increased hunger and thirst. On testing, was noted to have elevated blood sugar levels. Owing to the patient having a BMI of 31 Kgtm2, which of the following oral hypoglycaemic agents would you prefer to prescribe?",
    answers: [
      { text: "Metformin", correct: true },
      { text: "Tolbutamide", correct: false },
      { text: "Glipizide", correct: false },
      { text: "Gliclazide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the difference between a generic drug and a brand-name drug?",
    answers: [
      { text: "A generic drug is a copy of a brand-name drug with the same active ingredient but a different name.", correct: true },
      { text: "A generic drug is more expensive than a brand-name drug.", correct: false },
      { text: "A brand-name drug is always more effective than a generic drug.", correct: false },
      { text: "A generic drug is a new drug that has not yet been approved by the FDA.", correct: false },
      { text: "there is no difference", correct: false },
    ],
  },
  {
    question: "Which stage of pharmacokinetics describes the process of transformation of a drug in the body?",
    answers: [
      { text: "Metabolism", correct: true },
      { text: "Suction", correct: false },
      { text: "Distribution", correct: false },
      { text: "Withdrawal", correct: false },
      { text: "Half-life", correct: false },
    ],
  },
  {
    question: "What is the main organ involved in drug metabolism?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Kidneys", correct: false },
      { text: "Small intestine", correct: false },
    ],
  },
  {
    question: "What is drug bioavailability?",
    answers: [
      { text: "The proportion of a drug that reaches the systemic circulation unchanged.", correct: true },
      { text: "The rate of absorption of a drug.", correct: false },
      { text: "Volume of distribution of drug substance", correct: false },
      { text: "Half-life of a drug", correct: false },
      { text: "Metabolism", correct: false },
    ],
  },
  {
    question: "What is the therapeutic index?",
    answers: [
      { text: "Toxic to therapeutic dose ratio.", correct: true },
      { text: "The rate of absorption of a drug.", correct: false },
      { text: "Volume of distribution of drug substance", correct: false },
      { text: "Half-life of a drug", correct: false },
      { text: "Withdrawal", correct: false },
    ],
  },
  {
    question: "What are drug side effects?",
    answers: [
      { text: "Adverse effects of drugs associated with their pharmacological action.", correct: true },
      { text: "Desirable effects of drugs.", correct: false },
      { text: "Adverse effects of drugs not related to their pharmacological action", correct: false },
      { text: "The effect of a drug on receptors", correct: false },
      { text: "Addiction", correct: false },
    ],
  },
  {
    question: "What is a pharmacokinetic drug interaction?",
    answers: [
      { text: "The effect of one drug on the absorption, distribution, metabolism, or excretion of another.", correct: true },
      { text: "Changing the mechanism of action of a drug at the cellular level.", correct: false },
      { text: "Strengthening or weakening the pharmacological effect of one drug by another.", correct: false },
      { text: "Development of an allergic reaction to a combination of drugs.", correct: false },
      { text: "The rate of absorption of a drug.", correct: false },
    ],
  },
  {
    question: "What type of interaction might result in one of the drugs being less effective?",
    answers: [
      { text: "Antagonism", correct: true },
      { text: "Synergism", correct: false },
      { text: "Additivity", correct: false },
      { text: "Potentiation", correct: false },
      { text: "Agonism", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism by which grapefruit juice can interact with certain medications?",
    answers: [
      { text: "It inhibits cytochrome P450 3A4 enzymes", correct: true },
      { text: "It increases the metabolism of the drugs", correct: false },
      { text: "It enhances drug absorption from the gastrointestinal tract", correct: false },
      { text: "It alters renal clearance of the drugs", correct: false },
      { text: "It increases the activity of the enzyme cytochrome P450 3A4.", correct: false },
    ],
  },
  {
    question: "Which of the following combinations can lead to increased risk of bleeding due to drug interactions?",
    answers: [
      { text: "Warfarin and acetaminophen", correct: true },
      { text: "Warfarin and vitamin K", correct: false },
      { text: "Aspirin and acetaminophen", correct: false },
      { text: "Metformin and glimepiride", correct: false },
      { text: "Aspirin and NSAIDs", correct: false },
    ],
  },
  {
    question: "What substance is the main mediator in the sympathetic nervous system?",
    answers: [
      { text: "Norepinephrine", correct: true },
      { text: "Acetylcholine", correct: false },
      { text: "Serotonin", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Histamine", correct: false },
    ],
  },
  {
    question: "What effect does activation of the sympathetic nervous system have?",
    answers: [
      { text: "Increased heart rate, increased blood pressure", correct: true },
      { text: "Slowing down the heartbeat, lowering blood pressure", correct: false },
      { text: "Stimulates digestion", correct: false },
      { text: "Narrowing of the bronchi", correct: false },
      { text: "Bronchiospasm", correct: false },
    ],
  },
  {
    question: "What substance is the main mediator in the parasympathetic nervous system?",
    answers: [
      { text: "Acetylcholine", correct: true },
      { text: "Norepinephrine", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Serotonin", correct: false },
      { text: "Histamine", correct: false },
    ],
  },
  {
    question: "What drugs block the action of acetylcholine on nicotinic receptors?",
    answers: [
      { text: "Ganglionic blockers", correct: true },
      { text: "M-cholinomimetics", correct: false },
      { text: "M-anticholinergics", correct: false },
      { text: "Nicotinic receptors", correct: false },
      { text: "Calcium channel blockers", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of beta blockers used for glaucoma?",
    answers: [
      { text: "Increase the outflow of intraocular fluid", correct: true },
      { text: "Block inflammatory processes in the eye.", correct: false },
      { text: "Increases the production of intraocular fluid", correct: false },
      { text: "Reduce the outflow of intraocular fluid.", correct: false },
      { text: "Causes contraction of smooth muscles", correct: false },
    ],
  },
  {
    question: "What drugs are selective beta-2-adrenergic agonists?",
    answers: [
      { text: "Salbutamol, terbutaline", correct: true },
      { text: "Propranolol, atenolol", correct: false },
      { text: "Dopamine, norepinephrine", correct: false },
      { text: "Clonidine, methyldopa", correct: false },
      { text: "Acetylcholine", correct: false },
    ],
  },
  {
    question: "What are the possible side effects of beta blockers?",
    answers: [
      { text: "Dizziness, orthostatic hypotension", correct: true },
      { text: "Tachycardia, increased blood pressure", correct: false },
      { text: "Bradycardia, decreased blood pressure", correct: false },
      { text: "Dry mouth, constipation", correct: false },
      { text: "AV block", correct: false },
    ],
  },
  {
    question: "What medications are used to treat bronchial asthma?",
    answers: [
      { text: "Beta-2 adrenergic agonists", correct: true },
      { text: "Alpha-1 blockers", correct: false },
      { text: "Beta-1-blockers", correct: false },
      { text: "M-anticholinergics", correct: false },
      { text: "Diuretics", correct: false },
    ],
  },
  {
    question: "What type of receptor do opioid analgesics preferentially bind to?",
    answers: [
      { text: "Opioid receptors", correct: true },
      { text: "Adrenergic receptors", correct: false },
      { text: "Dopamine receptors", correct: false },
      { text: "GABA receptors", correct: false },
      { text: "Serotonin receptors", correct: false },
    ],
  },
  {
    question: "What is the main function of adrenergic antagonists in the body?",
    answers: [
      { text: "Block receptors of adrenaline and noradrenaline", correct: true },
      { text: "Increase heart rate", correct: false },
      { text: "Stimulate the sympathetic nervous system", correct: false },
      { text: "Decrease blood pressure", correct: false },
      { text: "Decrease heart rate", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of most general anesthetics?",
    answers: [
      { text: "Inhibition of the activity of neurons of the central nervous system", correct: true },
      { text: "Stimulation of the central nervous system", correct: false },
      { text: "Blockade of nicotinic cholinergic receptors", correct: false },
      { text: "Stimulation of the sympathetic nervous system", correct: false },
      { text: "Dopamine receptor blockade", correct: false },
    ],
  },
  {
    question: "Is this drug a benzodiazepine?",
    answers: [
      { text: "Diazepam", correct: true },
      { text: "Barbital", correct: false },
      { text: "Phenobarbital", correct: false },
      { text: "Valerian", correct: false },
      { text: "Zolpidem", correct: false },
    ],
  },
  {
    question: "What class of psychotropic drugs do antidepressants belong to?",
    answers: [
      { text: "Antidepressants", correct: true },
      { text: "Anxiolytics", correct: false },
      { text: "Neuroleptics", correct: false },
      { text: "Antipsychotics", correct: false },
      { text: "Nootropics", correct: false },
    ],
  },
  {
    question: "Which of the following substances is a typical representative of first-generation antipsychotic drugs?",
    answers: [
      { text: "Clozapine", correct: true },
      { text: "Fluoxetine", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "Sertraline", correct: false },
      { text: "Bupropion", correct: false },
    ],
  },
  {
    question: "Clozapine has a unique side effect profile. Which one is considered the most serious?",
    answers: [
      { text: "Agranulocytosis", correct: true },
      { text: "Extrapyramidal disorders", correct: false },
      { text: "Akathisia", correct: false },
      { text: "Neuroleptic malignant syndrome", correct: false },
      { text: "Tardive dyskinesia", correct: false },
    ],
  },
  {
    question: "Which of the following substances is a classical first-generation antiepileptic drug?",
    answers: [
      { text: "Phenytoin", correct: true },
      { text: "Lamotrigine", correct: false },
      { text: "Levetiracetam", correct: false },
      { text: "Gabapentin", correct: false },
      { text: "Topiramate", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of valproic acid?",
    answers: [
      { text: "Enhancement of the inhibitory effect of GABA", correct: true },
      { text: "Sodium channel blockade", correct: false },
      { text: "Calcium channel blockade", correct: false },
      { text: "Modulation of glutamate receptors", correct: false },
      { text: "CNS depression", correct: false },
    ],
  },
  {
    question: "Which neurotransmitter is deficient in Parkinson's disease?",
    answers: [
      { text: "Dopamine", correct: true },
      { text: "Serotonin", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Gamma-aminobutyric acid (GABA)", correct: false },
      { text: "Acetylcholine", correct: false },
    ],
  },
  {
    question: "Which of the following substances is a dopamine precursor and is used in the treatment of Parkinson's disease?",
    answers: [
      { text: "Levodopa", correct: true },
      { text: "Carbidopa", correct: false },
      { text: "Benserazide", correct: false },
      { text: "Entacapone", correct: false },
      { text: "Amantadine", correct: false },
    ],
  },
  {
    question: "What complications can occur when levodopa is used together with MAO (monoxidase) inhibitors?",
    answers: [
      { text: "Hypertensive crisis", correct: true },
      { text: "Hypotension", correct: false },
      { text: "Cardiac arrhythmia", correct: false },
      { text: "Neuroleptic malignant syndrome", correct: false },
      { text: "Serotanin syndrome", correct: false },
    ],
  },
  {
    question: "Which drug inhibits the secretion of hydrochloric acid?",
    answers: [
      { text: "H2-histamine receptor blockers", correct: true },
      { text: "antacids", correct: false },
      { text: "proton pump inhibitors", correct: false },
      { text: "M-anticholinergics", correct: false },
      { text: "ganglionic blockers", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a proton pump blocker?",
    answers: [
      { text: "omeprazole", correct: true },
      { text: "cimetidine", correct: false },
      { text: "platifillin", correct: false },
      { text: "gastrozepine", correct: false },
      { text: "denol", correct: false },
    ],
  },
  {
    question: "What drug is used for gastric ulcer with hyperchlorhydria?",
    answers: [
      { text: "cimetidine", correct: true },
      { text: "ganglionic blockers", correct: false },
      { text: "omeprazole", correct: false },
      { text: "atropine", correct: false },
      { text: "M-anticholinergics", correct: false },
    ],
  },
  {
    question: "Which drug increases appetite?",
    answers: [
      { text: "carnitine", correct: true },
      { text: "metacin", correct: false },
      { text: "famotidine", correct: false },
      { text: "insulin", correct: false },
      { text: "fepranon", correct: false },
    ],
  },
  {
    question: "Which cough suppressant has a narcotic type of action?",
    answers: [
      { text: "codeine", correct: true },
      { text: "tusuprex", correct: false },
      { text: "potassium iodide", correct: false },
      { text: "terpin hydrate", correct: false },
      { text: "fentanyl", correct: false },
    ],
  },
  {
    question: "Which of the following are bronchodilators?",
    answers: [
      { text: "adrenalin", correct: true },
      { text: "norepinephrine", correct: false },
      { text: "ephedrine", correct: false },
      { text: "atropine", correct: false },
      { text: "anaprilin", correct: false },
    ],
  },
  {
    question: "Which drug is a mast cell membrane stabilizer?",
    answers: [
      { text: "cromolyn sodium", correct: true },
      { text: "salbutamol", correct: false },
      { text: "euphyllin", correct: false },
      { text: "ipratropium bromide", correct: false },
      { text: "salmeterol", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used to prevent asthma attacks?",
    answers: [
      { text: "salbutamol", correct: true },
      { text: "ipratropium bromide", correct: false },
      { text: "potassium iodide", correct: false },
      { text: "anaprilin", correct: false },
      { text: "tusuprex", correct: false },
    ],
  },
  {
    question: "Which drug causes sputum liquefaction by breaking down disulfide bonds?",
    answers: [
      { text: "acetylcysteine", correct: true },
      { text: "ambroxol", correct: false },
      { text: "naltrexone", correct: false },
      { text: "sodium bicarbonate", correct: false },
      { text: "bromhexine", correct: false },
    ],
  },
  {
    question: "Which drug is effective and often used for pulmonary edema?",
    answers: [
      { text: "ganglionic blockers", correct: true },
      { text: "adrenergic blockers", correct: false },
      { text: "loop diuretics", correct: false },
      { text: "non-narcotic analgesics", correct: false },
      { text: "tranquilizers", correct: false },
    ],
  },
  {
    question: "What characterizes Phase 0 (rapid depolarization phase)?",
    answers: [
      { text: "conductivity", correct: true },
      { text: "automatism", correct: false },
      { text: "contractility", correct: false },
      { text: "action potential duration", correct: false },
      { text: "excitability", correct: false },
    ],
  },
  {
    question: "Which of the following is a pharmacological effect caused by cardiac glycosides?",
    answers: [
      { text: "positive inotropic effect", correct: true },
      { text: "negative inotropic effect", correct: false },
      { text: "positive dromotropic effect", correct: false },
      { text: "tachycardia", correct: false },
      { text: "bronchospasm", correct: false },
    ],
  },
  {
    question: "What is the side effect of cardiac glycosides?",
    answers: [
      { text: "atrioventricular block", correct: true },
      { text: "bronchospasm", correct: false },
      { text: "hyperglycemia", correct: false },
      { text: "hyperkalemia", correct: false },
      { text: "hypertension", correct: false },
    ],
  },
  {
    question: "Which of the following is used for cardiac glycoside intoxication?",
    answers: [
      { text: "lidocaine hydrochloride", correct: true },
      { text: "quinidine sulfate", correct: false },
      { text: "anaprilin", correct: false },
      { text: "furosemide", correct: false },
      { text: "unitiol", correct: false },
    ],
  },
  {
    question: "Which of the following is a general contraindication to the use of cardiac glycosides and β-blockers?",
    answers: [
      { text: "atrioventricular block", correct: true },
      { text: "heart failure", correct: false },
      { text: "bronchial asthma", correct: false },
      { text: "tachycardia", correct: false },
      { text: "hypertension", correct: false },
    ],
  },
  {
    question: "Which drug causes a decrease in cardiac contractility?",
    answers: [
      { text: "novocainamide", correct: true },
      { text: "disopyramide", correct: false },
      { text: "lidocaine hydrochloride", correct: false },
      { text: "talinolol", correct: false },
      { text: "verapamil", correct: false },
    ],
  },
  {
    question: "Identify the group of drugs: have cardiotonic activity; increase the influence of the vagus nerve on the heart; can cause atrioventricular block?",
    answers: [
      { text: "cardiac glycosides", correct: true },
      { text: "β-blockers", correct: false },
      { text: "calcium ion antagonists", correct: false },
      { text: "sympatholytics", correct: false },
      { text: "nitrates", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is indicated for use in atrioventricular block?",
    answers: [
      { text: "isadrin", correct: true },
      { text: "anaprilin", correct: false },
      { text: "metoprolol", correct: false },
      { text: "verapamil", correct: false },
      { text: "adrenergic blockers", correct: false },
    ],
  },
  {
    question: "Identify the drug: contains menthol; reflexively eliminates coronary spasm; has low antianginal activity?",
    answers: [
      { text: "validol", correct: true },
      { text: "dipyridamole", correct: false },
      { text: "trimetazidine", correct: false },
      { text: "trinitrolong", correct: false },
      { text: "Norvask", correct: false },
    ],
  },
  {
    question: "Specify the reason for the development of tolerance to organic nitrates?",
    answers: [
      { text: "reduction of sulfhydryl group content in vascular endothelium", correct: true },
      { text: "vascular tone disorder", correct: false },
      { text: "perversion of the response of the receptor apparatus of smooth muscles to nitric oxide", correct: false },
      { text: "with dilation of coronary vessels", correct: false },
      { text: "with an increase in the content of nitric oxide in the vascular endothelium", correct: false },
    ],
  },
  {
    question: "Which diuretic drug has a pronounced rebound effect?",
    answers: [
      { text: "mannitol", correct: true },
      { text: "urea", correct: false },
      { text: "furosemide", correct: false },
      { text: "arifon", correct: false },
      { text: "diacarb", correct: false },
    ],
  },
  {
    question: "In what situations are carbonic anhydrase inhibitors used?",
    answers: [
      { text: "Glaucoma", correct: true },
      { text: "pulmonary edema", correct: false },
      { text: "arterial hypertension;", correct: false },
      { text: "bronchial asthma", correct: false },
      { text: "atrioventricular block", correct: false },
    ],
  },
  {
    question: "Which drug is the drug of choice for cerebral edema?",
    answers: [
      { text: "furosemide", correct: true },
      { text: "spironolactone", correct: false },
      { text: "mannitol", correct: false },
      { text: "hydrochlorothiazide", correct: false },
      { text: "urea", correct: false },
    ],
  },
  {
    question: "Identify the drug: belongs to the group of ACE inhibitors; is used to treat arterial hypertension and chronic heart failure; the duration of action is 4-6 hours?",
    answers: [
      { text: "captopril", correct: true },
      { text: "Losartan", correct: false },
      { text: "candesartan", correct: false },
      { text: "verapamil", correct: false },
      { text: "diltiazem", correct: false },
    ],
  },
  {
    question: "Due to what pharmacological activity can clonidine cause short-term hypertension when administered rapidly intravenously?",
    answers: [
      { text: "with excitation of extrasynaptic α2-adrenergic receptors from vessels", correct: true },
      { text: "with excitation of β-adrenergic receptors of blood vessels", correct: false },
      { text: "with blockade of presynaptic α2-adrenergic receptors", correct: false },
      { text: "negative inotropic effect", correct: false },
      { text: "with dilation of coronary vessels", correct: false },
    ],
  },
  {
    question: "Identify the group of drugs: do they have hypotensive, antianginal and antiarrhythmic activity; can they cause atrioventricular block?",
    answers: [
      { text: "β-blockers", correct: true },
      { text: "sympatholytics", correct: false },
      { text: "α-blockers", correct: false },
      { text: "nitrates", correct: false },
      { text: "cardiac glycosides", correct: false },
    ],
  },
  {
    question: "Which of the following is the same effect of α1-blockers and diuretics?",
    answers: [
      { text: "hypotensive effect", correct: true },
      { text: "antianginal effect", correct: false },
      { text: "bradycardia", correct: false },
      { text: "tachycardia", correct: false },
      { text: "atrioventricular block", correct: false },
    ],
  },
  {
    question: "Which drug belongs to the group of direct-acting anticoagulants; the mechanism of action is associated with selective and reversible inhibition of thrombin?",
    answers: [
      { text: "hirudin", correct: true },
      { text: "enoxaparin", correct: false },
      { text: "heparin", correct: false },
      { text: "phenylin", correct: false },
      { text: "Fraxiparine", correct: false },
    ],
  },
  {
    question: "Which of the following is characteristic of heparin?",
    answers: [
      { text: "effective when administered parenterally", correct: true },
      { text: "takes effect in a few minutes", correct: false },
      { text: "cumulates", correct: false },
      { text: "inhibits blood clotting in vitro", correct: false },
      { text: "inhibits blood clotting in vivo", correct: false },
    ],
  },
  {
    question: "Which drug is a functional antagonist of indirect anticoagulants?",
    answers: [
      { text: "Vikasol", correct: true },
      { text: "protamine sulfate", correct: false },
      { text: "hirudin", correct: false },
      { text: "calcium chloride", correct: false },
      { text: "contrical", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is the drug of choice for the treatment of pneumonia caused by pneumococcus?",
    answers: [
      { text: "Levofloxacin", correct: true },
      { text: "Erythromycin", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "Gentamicin", correct: false },
      { text: "Vancomycin", correct: false },
    ],
  },
  {
    question: "Which of the following complications is most commonly associated with the use of aminoglycosides?",
    answers: [
      { text: "Nephrotoxicity", correct: true },
      { text: "Agranulocytosis", correct: false },
      { text: "Allergic dermatitis", correct: false },
      { text: "Myasthenic syndrome", correct: false },
      { text: "Hepatitis", correct: false },
    ],
  },
  {
    question: "Which of the listed drugs is a sulfonamide?",
    answers: [
      { text: "Sulfadimezine", correct: true },
      { text: "Cephalosporin", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Levomycetin", correct: false },
      { text: "Nitrofuran", correct: false },
    ],
  },
  {
    question: "Which of the following correctly describes the mechanism of action of sulfonamides?",
    answers: [
      { text: "Inhibition of folic acid synthesis", correct: true },
      { text: "Blocking protein synthesis", correct: false },
      { text: "Violation of cell wall synthesis", correct: false },
      { text: "Damage to the cell membrane", correct: false },
      { text: "Inhibition of DNA gyrase", correct: false },
    ],
  },
  {
    question: "Which of the following is the main advantage of co-trimoxazole?",
    answers: [
      { text: "Broad spectrum of action", correct: true },
      { text: "No side effects", correct: false },
      { text: "High rate of resistance development", correct: false },
      { text: "Low cost", correct: false },
      { text: "Use for all types of infections", correct: false },
    ],
  },
  {
    question: "By what mechanism do quinolones exert a bactericidal effect on bacteria?",
    answers: [
      { text: "Inhibition of DNA gyrase", correct: true },
      { text: "Inhibition of protein synthesis", correct: false },
      { text: "Disorders of cell wall synthesis", correct: false },
      { text: "Damage to the cell membrane", correct: false },
      { text: "Blockade of folic acid synthesis", correct: false },
    ],
  },
  {
    question: "Depending on what pharmacological properties are cephalosporins divided into generations?",
    answers: [
      { text: "Spectrum of antimicrobial action", correct: true },
      { text: "Chemical structure", correct: false },
      { text: "Method of administration", correct: false },
      { text: "Toxicity", correct: false },
      { text: "Costs", correct: false },
    ],
  },
  {
    question: "Against which types of microorganisms are monobactams active?",
    answers: [
      { text: "Gram-negative bacteria", correct: true },
      { text: "Gram-positive bacteria", correct: false },
      { text: "Aerobic and anaerobic bacteria", correct: false },
      { text: "Mushrooms", correct: false },
      { text: "Viruses", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a beta-lactamase inhibitor?",
    answers: [
      { text: "Clavulanic acid", correct: true },
      { text: "Cephalosporin", correct: false },
      { text: "Levomycetin", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Ampicillin", correct: false },
    ],
  },
  {
    question: "Which of the following complications is most commonly associated with penicillin use?",
    answers: [
      { text: "Allergic reactions", correct: true },
      { text: "Nephrotoxicity", correct: false },
      { text: "Neurotoxicity", correct: false },
      { text: "Hepatitis", correct: false },
      { text: "Myelosuppression", correct: false },
    ],
  },
  {
    question: "Which of the listed drugs is one of the main first-line anti-tuberculosis drugs?",
    answers: [
      { text: "Isoniazid, rifampicin, pyrazinamide, ethambutol", correct: true },
      { text: "Streptomycin, kanamycin, gentamicin", correct: false },
      { text: "Fluoroquinolones, macrolides", correct: false },
      { text: "Cephalosporins, penicillins", correct: false },
      { text: "Nitrofurans", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of isoniazid?",
    answers: [
      { text: "Inhibition of mycolic acid synthesis", correct: true },
      { text: "Blocking protein synthesis", correct: false },
      { text: "Violation of cell wall synthesis", correct: false },
      { text: "Damage to the cell membrane", correct: false },
      { text: "Blocking DNA replication", correct: false },
    ],
  },
  {
    question: "Against which of the following is pyrazinamide most active?",
    answers: [
      { text: "Mycobacterium tuberculosis in a dormant state", correct: true },
      { text: "Mycobacterium tuberculosis in the phase of active reproduction", correct: false },
      { text: "Gram-positive bacteria", correct: false },
      { text: "Gram-negative bacteria", correct: false },
      { text: "Mushrooms", correct: false },
    ],
  },
  {
    question: "Which of the following side effects is a side effect of isoniazid?",
    answers: [
      { text: "Peripheral neuritis", correct: true },
      { text: "Allergic reactions", correct: false },
      { text: "Hepatitis", correct: false },
      { text: "Nephrotoxicity", correct: false },
      { text: "Myelosuppression", correct: false },
    ],
  },
  {
    question: "Which drug is a broad-spectrum anthelmintic?",
    answers: [
      { text: "Albendazole", correct: true },
      { text: "Levamisole", correct: false },
      { text: "Pyrantel", correct: false },
      { text: "Niclosamide", correct: false },
      { text: "Piperazine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most commonly used to treat ascariasis?",
    answers: [
      { text: "Pyrantel", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Niclosamide", correct: false },
      { text: "Niclosamide", correct: false },
      { text: "Piperazine", correct: false },
    ],
  },
  {
    question: "Which drug is most commonly used for malaria prophylaxis in areas with low endemicity and chloroquine-sensitive plasmodia strains?",
    answers: [
      { text: "Chloroquine", correct: true },
      { text: "Mefloquine", correct: false },
      { text: "Artemisinin", correct: false },
      { text: "Primaquine", correct: false },
      { text: "Polyenes", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is the mainstay of malaria prophylaxis?",
    answers: [
      { text: "Mefloquine", correct: true },
      { text: "Chloroquine", correct: false },
      { text: "Primaquine", correct: false },
      { text: "Chloroquine", correct: false },
      { text: "Erythromycin", correct: false },
    ],
  },
  {
    question: "Which of the following diseases is treated with metronidazole?",
    answers: [
      { text: "Trichomoniasis", correct: true },
      { text: "Flu", correct: false },
      { text: "Malaria", correct: false },
      { text: "Helminthiasis", correct: false },
      { text: "tuberculosis", correct: false },
    ],
  },
  {
    question: "What class of antiprotozoal drugs does chloroquine belong to?",
    answers: [
      { text: "4-aminoquinolines", correct: true },
      { text: "Nitroimidazoles", correct: false },
      { text: "Benzimidazoles", correct: false },
      { text: "Polyenes", correct: false },
      { text: "Macrolides", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a broad-spectrum antifungal agent?",
    answers: [
      { text: "Amphotericin B", correct: true },
      { text: "Nystatin", correct: false },
      { text: "Fluconazole", correct: false },
      { text: "Terbinafine", correct: false },
      { text: "Ketakinasol", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of azoles?",
    answers: [
      { text: "Ergosterol synthesis disorder", correct: true },
      { text: "Inhibition of fungal cell wall synthesis", correct: false },
      { text: "Damage to the cytoplasmic membrane", correct: false },
      { text: "Mitosis block", correct: false },
      { text: "Violation of cell wall synthesis", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a broad-spectrum antifungal agent?",
    answers: [
      { text: "Amphotericin B", correct: true },
      { text: "Terbinafine", correct: false },
      { text: "Fluconazole", correct: false },
      { text: "Nystatin", correct: false },
      { text: "Amphotericin A", correct: false },
    ],
  },
  {
    question: "What drug is most often used for topical treatment of athlete's foot?",
    answers: [
      { text: "Clotrimazole", correct: true },
      { text: "Fluconazole", correct: false },
      { text: "Amphotericin B", correct: false },
      { text: "Nystatin", correct: false },
      { text: "Terbinafine", correct: false },
    ],
  },
  {
    question: "What class of antiviral drugs does acyclovir belong to?",
    answers: [
      { text: "Nucleoside analogues", correct: true },
      { text: "Neuraminidase inhibitors", correct: false },
      { text: "Protease inhibitors", correct: false },
      { text: "Interferons", correct: false },
      { text: "Suppression of virus replication", correct: false },
    ],
  },
  {
    question: "What drug is used to treat flu?",
    answers: [
      { text: "Oseltamivir", correct: true },
      { text: "Acyclovir", correct: false },
      { text: "Pencycline", correct: false },
      { text: "Nystatin", correct: false },
      { text: "Fluconazole", correct: false },
    ],
  },
  {
    question: "Which of the following substances is a purine analogue and is used in tumor chemotherapy?",
    answers: [
      { text: "6-mercaptopurine", correct: true },
      { text: "Methotrexate", correct: false },
      { text: "Adriamycin", correct: false },
      { text: "Cyclophosphamide", correct: false },
      { text: "Interferons", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of pyrimidine analogues?",
    answers: [
      { text: "Inhibition of DNA synthesis", correct: true },
      { text: "Inhibition of protein synthesis", correct: false },
      { text: "Damage to cell membranes", correct: false },
      { text: "Induction of apoptosis", correct: false },
      { text: "Inhibition of DNA gyrase", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is an alkylating agent?",
    answers: [
      { text: "Cyclophosphamide", correct: true },
      { text: "Vincristine", correct: false },
      { text: "Bleomycin", correct: false },
      { text: "Taxol", correct: false },
      { text: "Methotrexate", correct: false },
    ],
  },
  {
    question: "Which drug is commonly used to relieve acute gout attacks?",
    answers: [
      { text: "Colchicine", correct: true },
      { text: "Allopurinol", correct: false },
      { text: "Ibuprofen", correct: false },
      { text: "Methotrexate", correct: false },
      { text: "Mefloquine", correct: false },
    ],
  },
  {
    question: "To what class of biologically active substances do autacoids belong?",
    answers: [
      { text: "Mediators", correct: true },
      { text: "Hormones", correct: false },
      { text: "Enzymes", correct: false },
      { text: "Vitamins", correct: false },
      { text: "Squirrels", correct: false },
    ],
  },
  {
    question: "Which autacoid plays a key role in inflammatory processes?",
    answers: [
      { text: "Histamine", correct: true },
      { text: "Thyroxine", correct: false },
      { text: "Oxytocin", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Dopamine", correct: false },
    ],
  },
  {
    question: "What are immunomodulators?",
    answers: [
      { text: "Agents that regulate the activity of the immune system", correct: true },
      { text: "Vitamins that strengthen the body", correct: false },
      { text: "Substances that stimulate the growth of tumor cells", correct: false },
      { text: "Drugs that suppress the immune response", correct: false },
      { text: "Immunomodulators reduce the functions of the immune system", correct: false },
    ],
  },
  {
    question: "Which of the following drugs are immunosuppressants?",
    answers: [
      { text: "Cyclosporine", correct: true },
      { text: "Interferons", correct: false },
      { text: "Thymic hormones", correct: false },
      { text: "Levamisole", correct: false },
      { text: "Methotrexate", correct: false },
    ],
  },
  {
    question: "What side effects can long-term use of immunostimulants cause?",
    answers: [
      { text: "Autoimmune diseases", correct: true },
      { text: "Drowsiness and apathy", correct: false },
      { text: "Lowering blood pressure", correct: false },
      { text: "Weight gain", correct: false },
      { text: "Hypersensitivity", correct: false },
    ],
  },
  {
    question: "Which hormone plays a key role in regulating blood glucose levels?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Adrenalin", correct: false },
      { text: "Cortisol", correct: false },
      { text: "Thyroxine", correct: false },
      { text: "ACTH", correct: false },
    ],
  },
  {
    question: "What is the main mechanism of action of oral contraceptives?",
    answers: [
      { text: "Suppression of ovulation", correct: true },
      { text: "Thickening of the uterine mucosa", correct: false },
      { text: "Inhibition of spermatogenesis", correct: false },
      { text: "Regulation of the menstrual cycle", correct: false },
      { text: "Cause amenorrhea", correct: false },
    ],
  },
  {
    question: "What drugs are used to treat androgen deficiency in men?",
    answers: [
      { text: "Testosterone esters", correct: true },
      { text: "Antiandrogens", correct: false },
      { text: "Estrogens", correct: false },
      { text: "Progestins", correct: false },
      { text: "Cortisol", correct: false },
    ],
  },
  {
    question: "Which drug is often prescribed to increase calcium levels in patients with osteoporosis?",
    answers: [
      { text: "Calcium carbonate", correct: true },
      { text: "Insulin", correct: false },
      { text: "Calcitonin", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Methotrexate", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of insulin therapy?",
    answers: [
      { text: "Hypoglycemia (low blood sugar)", correct: true },
      { text: "High blood pressure", correct: false },
      { text: "Increased heart rate", correct: false },
      { text: "Weight loss", correct: false },
      { text: "Weight gain", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const modeToggle = document.getElementById('mode-toggle');

let currentQuestionIndex = 0;
let score = 0;
let isAnswerMode = false;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  if (isAnswerMode) {
    // Answer mode: Show all options with correct answer highlighted
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      
      if (answer.correct) {
        button.classList.add('correct-answer-mode');
      } else {
        button.classList.add('other-answer-mode');
      }
      
      button.disabled = true;
      answerButtons.appendChild(button);
    });
    
    // Always show navigation buttons in answer mode
    nextButton.style.display = 'inline';
    backButton.style.display = 'inline';
  } else {
    // Quiz mode: Show all shuffled answers
    const shuffledAnswers = [...currentQuestion.answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }

    shuffledAnswers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');

      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }

      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
  }
}

function resetState() {
  if (!isAnswerMode) {
    nextButton.style.display = 'none';
    backButton.style.display = 'none';
  }

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  if (isAnswerMode || currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else if (!isAnswerMode) {
      showScore();
    } else {
      // In answer mode, loop back to first question
      currentQuestionIndex = 0;
      showQuestion();
    }
  } else if (!isAnswerMode && currentQuestionIndex >= questions.length) {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (!isAnswerMode && currentQuestionIndex >= questions.length) {
    startQuiz();
  } else {
    handleNextButton();
  }
});

function handleBackButton() {
  if (isAnswerMode || currentQuestionIndex > 0) {
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
      // In answer mode, loop to last question
      currentQuestionIndex = questions.length - 1;
    }
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  handleBackButton();
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

// Mode toggle functionality
modeToggle.addEventListener('click', () => {
  isAnswerMode = !isAnswerMode;
  
  if (isAnswerMode) {
    modeToggle.innerHTML = '📝 Quiz Mode';
    modeToggle.title = 'Switch to Quiz Mode';
    // Reset score when entering answer mode
    score = 0;
  } else {
    modeToggle.innerHTML = '📖 Answer Mode';
    modeToggle.title = 'Switch to Answer Mode';
    // Reset score when entering quiz mode
    score = 0;
  }
  
  // Refresh current question with new mode
  showQuestion();
});

document.addEventListener("DOMContentLoaded", () => {
  const nightToggle = document.getElementById("night-mode-toggle");

  nightToggle.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    nightToggle.textContent = document.body.classList.contains("night-mode")
      ? "☀️ Day Mode"
      : "🌙 Night Mode";
  });
});

startQuiz();
