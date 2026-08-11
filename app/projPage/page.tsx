import PageHeader from '../components/PageHeader';
import { IndBox } from '../components/IndependentCard';

const projPage = () => {
  return (
    <div>
      <PageHeader
        title="Recent Projects"
        subtitle="Independent and collaborative work spanning ML, healthcare, and web development."
      />
      <section id="proj" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-8">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <a
            href="https://github.com/Suchit-07/Lung-and-Colon-Detection-Model-Website/tree/main/public"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block w-full break-inside-avoid"
          >
            <IndBox
              title="LUMINA: LUng, colon, Multi-class Imaging via Noninvasive Analysis"
              org="Low-cost, multi-class ultrasound analysis to identify different types of cancer (lung adenocarcinomas, squamous cell carcinomas, colon adenocarcinomas, etc.). Leverages ResNet18 architecture enhanced with a custom attention layer to improve feature focus and classification accuracy."
              color="#fbceb1"
              borderColor="#e0b594"
            />
          </a>
          <a
            href="https://github.com/aaru4/mediScript"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block w-full break-inside-avoid"
          >
            <IndBox
              title="MediScript"
              org="A custom-built, domain-specific language designed to make coding accessible to non-technical healthcare professionals. Scenario example: a doctor wants to create a simple AI assistant that checks patient symptoms and recommends whether further testing is needed. See MediScript's simple solution by clicking this card."
              color="#ffcbdb"
              borderColor="#fa98b6"
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=-zZfaS5J5Wc"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block w-full break-inside-avoid"
          >
            <IndBox
              title="MelaninMed: Presented at the United Nations"
              org="MelaninMed is the first racially equitable skin cancer detection AI-powered mobile application. MelaninMed integrates two machine learning models: a malignancy classifier and a lesion diagnosis system, including a custom ViT adaptor with a SqueezeExcite block. The malignancy classifier has ~99% accuracy, sensitivity, and specificity. The lesion diagnosis system diagnoses 78 different skin conditions with 95% accuracy and sensitivity, as well as 99% specificity. There is no significant performance difference between skin tones."
              color="#b1ddc9"
              borderColor="#86b0a0"
            />
          </a>
          <a
            href="https://github.com/aaru4/POCUS-Net/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block w-full break-inside-avoid"
          >
            <IndBox
              title="POCUS-Net"
              org="A novel, high-performing neural network which utilizes a two-pronged approach to automate gastric POCUS and reduce aspiration in surgery. A submitted ultrasound is classified as being filled with liquid, solids, or air using machine learning classification. Next, the model segments the anteroposterior and craniocaudal diameters, performing calculations to determine operable volume. Accordingly, the model weighs the decisions and outputs aspiration risk. A high-accuracy (~87%) model like this has never been created before and contributes to making anesthesia practices efficient and safer for the patient and the healthcare provider."
              color="#fbceb1"
              borderColor="#e0b594"
            />
          </a>
          <a
            href="https://aaru7811.wixsite.com/climicideml"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block w-full break-inside-avoid"
          >
            <IndBox
              title="ClimiCide"
              org="ClimiCide is a machine learning model that predicts suicide rates in 2040 due to rising temperatures, offering a powerful lens into the mental health impacts of climate change across different demographics. Trained on NOAA, CDC, and Climate Impact Lab datasets, ClimiCide uses a HistGradientBoostingRegressor in Python to forecast the increase of suicides due to warming temperatures: revealing stark climate injustices in the process."
              color="#6cd0d0"
              borderColor="#519e9e"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default projPage;
