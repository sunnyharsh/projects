import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { getSongs } from "../../store/actions/getSongs.action";
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.props.$getSongs({ value: "latest" });
  }

  render() {
    return (
      <React.Fragment>
        <h1>hello</h1>
      </React.Fragment>
    );
  }
}

const mapState = ({ getSongs }) => {
  return {
    // _getSongs: getSongs
  };
};
const mapDispatch = dispatchEvent => ({
  // $getSongs: values => dispatchEvent(getSongs(values))
});
export default connect(mapState, mapDispatch)(Index);
