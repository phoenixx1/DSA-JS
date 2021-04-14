class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="phoenixx1" />
      </div>
    );
  }
}
// Change code below this line
const Camper = (props) => {
  Camper.propTypes = { name: PropTypes.string.isRequired };
  Camper.defaultProps = {
    name: "CamperBot",
  };

  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};
