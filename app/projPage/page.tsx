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
                org="A custom-built, domain-specific language designed to make coding accessible to non-technical healthcare professionals. 
                  Scenario:

A doctor wants to create a simple AI assistant that checks patient symptoms and recommends whether further testing is needed.

prepare patient as {

name: "John Doe",
age: 30
}

diagnose symptoms needs {

fever: true,
cough: false,
fatigue: true
}

if symptoms.fever or symptoms.fatigue {

prescribe "Further tests needed"
} else {

prescribe "No immediate concern"
}"
                color="#b1ddc9"
                borderColor="#86b0a0"  
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
                org="MelaninMed is the first racially equitable skin cancer detection AI-powered mobile application. MelaninMed integrates two machine learning
models: a malignancy classifier and a lesion
diagnosis system, including a custom ViT adaptor with a SqueezeExcite block. The malignancy classifier
has ~99% accuracy, sensitivity, and specificity. The lesion diagnosis system diagnoses 78
different skin conditions with 95% accuracy and sensitivity, as well as 99% specificity. There is
no significant performance difference between skin tones.
"
                color="#6cd0d0"
                borderColor="#519e9e"
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
                org="Skin cancer is the most common cancer in the United States, and early detection and treatment is critical for survival. Artificial intelligence-based skin classification mobile applications offer a popular, cost-effective, and accessible way to identify skin cancer. However, almost all of these platforms perform significantly worse on darker skin. 
MelaninMed addresses the gap as the first AI skin classifier and mobile application developed on the Diverse Dermatology Images dataset. MelaninMed integrates two machine learning models: a malignancy classifier (ResNet-18 with an attention mechanism) and a lesion diagnosis system (custom ViT adaptor with a SqueezeExcite block). The malignancy classifier has ~99% accuracy, sensitivity, and specificity. The lesion diagnosis system diagnoses 78 different skin conditions with 95% accuracy and sensitivity, as well as 99% specificity. There is no significant performance difference between skin tones. 
These rapid, highly-accurate models are combined in an intuitive, visually appealing mobile application. Users can upload a picture of their lesion and get a risk classification and potential diagnosis within seconds. The application also offers a GPT-4 chatbot, location services to nearby dermatologists, and easy access to scan history. MelaninMed not only improves access to skin cancer diagnostics for underrepresented populations but also sets a precedent for equity in healthcare and technology.
" 
            color="#ffcbdb"
            borderColor="#fa98b6"
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
                color="#fbceb1"
                borderColor="#e0b594" 
              />
            </a>

          </div>
        </section>
 
      </div>
    );
  };
  
  export default projPage;
  
