import styled from "styled-components";

const Move = styled.div`
  margin-left: ${({ sidebar }) => (sidebar ? "100px" : "0")};
`;

const NavigationContainer = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return <div></div>;
};

export default NavigationContainer;
