import './CenteredContainer.css';

interface ContainerProps {
  children: JSX.Element;
}

const CenteredContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="centered-container">{children}</div>;
};

export default CenteredContainer;
