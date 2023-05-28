import React, { Component } from "react";
//import UserPopup from '../../components/user_popup';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./index.scss";
import Modal from "react-modal";

const style = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.66)",
    zIndex: 10000,
  },
  content: {
    margin: "0 auto",
  },
};

const customStyles = {
  content: {
    backgroundColor:"white",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsOpenListuser: false,
      modalIsOpenDeleteuser: false,
      Data: [],
    };

    this.openModal = this.openModal.bind(this);
    this.openModalListUser = this.openModalListUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModalDeleteUser = this.openModalDeleteUser.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  openModalListUser() {
    this.setState({ modalIsOpenListuser: true });
  }

  openModalDeleteUser() {
    this.setState({ modalIsOpenDeleteuser: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  closeModals = () => {
    this.setState({ modalIsOpenListuser: false });
  };
  closeModalsDelete = () => {
    this.setState({ modalIsOpenDeleteuser: false });
  };
  handleChange = (evt) => {
    const value = evt.target.value;

    const name = evt.target.name;

    this.setState((prevState) => ({
      popData: {
        // object that we want to update
        ...prevState.popData, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
    // this.props.getVehicleMasterAPI();
  };
  render() {
    let { Data } = this.state;
    Data = [
      { name: "vinod" },
      { name: "vedha" },
      { name: "jessy" },
      { name: "sudheesh" },
      { name: "neerav" },
      { name: "vedha" },
    ];

    return (
      <div className="App">
        <h2 className="app_head_text">App1 - version 2.0.0</h2>
        <div className="row">
          <div className="col">
            <button className="app_button" onClick={this.openModal}>
              Add User
            </button>

            {this.state.modalIsOpen && (
              <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                //style={style}
              >
                <button onClick={this.closeModal}>X</button>
                <input
                  type="text"
                  placeholder="Add User:"
                  //name="regNo"
                  style={{ textTransform: "uppercase" }}
                  // value={this.state.popData.regNo}
                  onChange={this.handleChange}
                />
                <button>Submit</button>
                <form></form>
              </Modal>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="app_button" onClick={this.openModalListUser}>
              List User
            </button>

            {this.state.modalIsOpenListuser && (
              <Modal
                isOpen={this.state.modalIsOpenListuser}
                //onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModals}
                style={customStyles}
                contentLabel="Example Modal"
              
              >
                <button onClick={this.closeModals}>X</button>
                {/* <input
                      type="text"
                      placeholder="List User:"
                      //name="regNo"
                      style={{ textTransform: "uppercase" }}
                     // value={this.state.popData.regNo}
                      onChange={this.handleChange}
                    /> */}

                <ReactTable
                  NoDataComponent={() => null}
                  pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
                  style={{
                    height: "290px",
                    marginTop: "0%",
                    marginRight: "30px",
                    marginLeft: "40px",
                    backgroundColor: "white",
                    color: "black",
                    // width: "1000px",
                  }}
                  data={Data}
                  showPagination={false}
                  columns={[
                    {
                      Header: "List User",
                      id: "name",
                      accessor: (d) => d.name,
                      width: 400,

                      filterAll: true,
                      resizable: false,
                    },
                  ]}
                  defaultSorted={[
                    {
                      id: "serialNumber",
                      asc: true,
                    },
                  ]}
                  defaultPageSize={50}
                  className="-striped -highlight"
                />
              </Modal>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="app_button" onClick={this.openModalDeleteUser}>
              Delete User
            </button>

            {this.state.modalIsOpenDeleteuser && (
              <Modal
                isOpen={this.state.modalIsOpenDeleteuser}
                //onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModalsDelete}
                style={customStyles}
                contentLabel="Example Modal"
                //style={style}
              >
                <button onClick={this.closeModalsDelete}>X</button>
                <input
                  type="text"
                  placeholder="Delete User:"
                  //name="regNo"
                  style={{ textTransform: "uppercase" }}
                  // value={this.state.popData.regNo}
                  onChange={this.handleChange}
                />
                <button>Submit</button>
                <form></form>
              </Modal>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
