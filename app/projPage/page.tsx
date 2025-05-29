import Navbar from '../components/header';
import { IndBox } from '../components/IndependentCard';

const projPage = () => {
    return (
      <div>
        <div className="block mb-4 w-full">
            <Navbar></Navbar>
        </div>
        <section id="proj">
        <div className="flex items-center justify-center w-full">
  <div id="proj" className="bg-white p-3 pb-0 pt-3 rounded-lg">
    <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
      Recent Projects
    </h1>
  </div>
</div>    

<div className="w-screen pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-6 pt-6 px-6">
            <a
              href="https://github.com/Suchit-07/Lung-and-Colon-Detection-Model-Website/tree/main/public"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
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
              className="inline-block mt-4"
            >
              <IndBox
                title="MediScript"
                org="A custom-built, domain-specific language designed for medical diagnostics and treatment planning, democratizing AI for healthcare professionals."
                color="#fbceb1"
                borderColor="#e0b594"  
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=-zZfaS5J5Wc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="MelaninMed"
                org="A deep learning powered AI mobile application for racially equitable skin cancer detection. MelaninMed integrates two machine learning
models: a malignancy classifier (ResNet-18 with an attention mechanism) and a lesion
diagnosis system (custom ViT adaptor with a SqueezeExcite block). The malignancy classifier
has ~99% accuracy, sensitivity, and specificity. The lesion diagnosis system diagnoses 78
different skin conditions with 95% accuracy and sensitivity, as well as 99% specificity. There is
no significant performance difference between skin tones"
                color="#b1ddc9"
                borderColor="#86b0a0"
              />
            </a>
            <a
              href="https://github.com/aaru4/POCUS-Net/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="POCUS-Net"
                org="A highly-accurate transformer-based classification model to reduce anesthesia-induced aspiration morbidity."
                color="#6cd0d0"
                borderColor="#519e9e"
              />
            </a>
            <a
              href="https://aaru7811.wixsite.com/climicideml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="ClimiCide"
                org="A gradient boosting regressor, trained on a custom dataset, to predict increases in climate-change-induced suicides."
                color="#ffcbdb"
                borderColor="#fa98b6"
              />
            </a>

          </div>
        </section>
 
      </div>
    );
  };
  
  export default projPage;
  
