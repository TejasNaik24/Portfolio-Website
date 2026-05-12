import SinglePublication from "./SinglePublication";

const publications = [
  {
    title: "BeetleFlow: An Integrative Deep Learning Pipeline for Beetle Image Processing",
    authors: "Fangxun Liu, S M Rayeed, Samuel Stevens, ..., Tejas Naik, et al.",
    venue: "NeurIPS 2025 Workshop on Imageomics",
    description: "An end-to-end deep learning pipeline combining an open-vocabulary detector (Grounding DINO) and vision-language model (LLaVA-NeXT) to achieve 97.81% accuracy in automated beetle detection. It features fine-grained morphological segmentation using Mask2Former (85.11% mIoU), significantly accelerating large-scale biodiversity digitization.",
    links: {
      pdf: "https://arxiv.org/abs/2511.00255",
    },
  }
];

const AllPublications = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {publications.map((publication, index) => {
        return <SinglePublication key={index} publication={publication} />;
      })}
    </div>
  );
};

export default AllPublications;
