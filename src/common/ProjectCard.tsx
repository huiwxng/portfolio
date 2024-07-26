interface ProjectCardProps {
  src: string;
  link: string;
  title: string;
  desc: string;
}

function ProjectCard({ src, link, title, desc }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
}

export default ProjectCard;
