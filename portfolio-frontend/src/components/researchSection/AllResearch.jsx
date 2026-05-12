import SingleResearch from "./SingleResearch";

const researchExperience = [
  {
    icon: "./Nationwide.png",
    company: "Nationwide Children's Hospital",
    roles: [
      {
        title: "AI Research Intern",
        date: "April 2026 - Present",
        responsibilities: [
          "Building a production RAG pipeline integrating AWS Bedrock Knowledge Base with the DAPHNE clinical chatbot for semantic retrieval of community health resources supporting pediatric social needs navigation.",
          "Engineering a multi-stage data pipeline including a custom web scraper with regex-based contact extraction, schema normalization, noise auditing, and automated S3 ingestion for Bedrock vector indexing.",
          "Conducting empirical A/B experiments on LLM retrieval ranking behavior, discovering position-invariant recommendation properties that differ fundamentally from classical information retrieval systems.",
          "Designing a dual-taxonomy routing system merging FindHelp and CAP4Kids category structures to enable condition-specific resource navigation across 24 pediatric health categories within a constrained latency budget.",
        ],
      }
    ]
  },
  {
    icon: "./OSUResearcher.png",
    company: "The Ohio State University",
    roles: [
      {
        title: "LLM/NLP Researcher",
        date: "Jan 2026 - Present",
        responsibilities: [
          "Conducting advanced deep learning research under Dr. Sachin Kumar, with a primary focus on large language models, natural language processing, and multimodal architectures utilizing PyTorch and Hugging Face.",
          "Partnering with graduate teams on the DRIP initiative to engineer efficient Vision Transformer models that dynamically optimize computational overhead without sacrificing accuracy.",
          "Benchmarking and validating model performance on ImageNet datasets, meticulously analyzing GFLOPs and memory consumption to guarantee highly reproducible research outcomes.",
          "Investigating the integration of vision encoders with LLMs in multimodal frameworks like CLIP and LLaVA to compare and optimize transformer-based architectures.",
          "Gaining practical expertise in distributed training via PyTorch DDP and DeepSpeed by orchestrating multi-GPU experiments on high-performance computing clusters.",
          "Implementing rigorous quantitative evaluation techniques for classification and vision-language tasks to drive innovations in scalable AI design."
        ],
      },
      {
        title: "Computer Vision Researcher",
        date: "Aug 2025 - Present",
        responsibilities: [
          "Spearheading computer vision, object detection, and image segmentation research under the guidance of Dr. Wei-Lun “Harry” Chao using PyTorch.",
          "Engineering robust multi-model segmentation pipelines by combining YOLOv8, Grounding DINO, and Segment Anything 2 (SAM2) for highly precise visual detection.",
          "Streamlining data preprocessing and annotation workflows utilizing OpenCV, NumPy, and COCO-formatted datasets to boost overall model scalability.",
          "Leveraging cutting-edge transformer and convolutional models to accurately segment complex neural imaging data, specifically targeting IPS neurons.",
          "Executing hyperparameter optimization and quantitative benchmarking using mAP, IoU, and Dice metrics to produce reproducible, high-quality results.",
          "Collaborating across interdisciplinary teams to push the boundaries of AI research with an emphasis on interpretability and deployment-ready solutions."
        ],
      }
    ]
  },
];

const AllResearch = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {researchExperience.map((research, index) => {
        return <SingleResearch key={index} research={research} />;
      })}
    </div>
  );
};

export default AllResearch;
