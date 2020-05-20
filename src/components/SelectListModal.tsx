import React from "react";
import {
  Modal,
  ListGroup,
  ListGroupItem,
  ModalTitle,
  ModalFooter,
  Button,
  Alert,
} from "react-bootstrap";
import { Component } from "react";
import ModalHeader from "react-bootstrap/ModalHeader";

type SelectListModalProps = {
  allData: any[];
  onHide: (cancelled: boolean, selectedData?: any[]) => void;
  renderItem: (value: any) => JSX.Element;
  show: boolean;
  usedData: any[];
  validateData?: (data: any[]) => boolean;
  getValidationError?: (data: any[]) => string;
};

type CheckedElement = {
  checked: boolean;
  data: any;
};
type SelectListModalState = {
  checkedData: CheckedElement[];
  validationError: string;
};
export default class SelectListModal extends Component<
  SelectListModalProps,
  SelectListModalState
> {
  constructor(props: SelectListModalProps) {
    super(props);
    this.state = {
      checkedData: props.allData.map((value) => ({
        checked: props.usedData.includes(value),
        data: value,
      })),
      validationError: "",
    };
  }

  componentDidUpdate(prevProps: SelectListModalProps) {
    if (prevProps !== this.props) {
      this.setState({
        checkedData: this.props.allData.map((value) => ({
          checked: this.props.usedData.includes(value),
          data: value,
        })),
        validationError: "",
      });
    }
  }

  render() {
    const {
      onHide,
      renderItem,
      show,
      validateData,
      getValidationError,
    } = this.props;
    const { checkedData, validationError } = this.state;
    return (
      <Modal
        scrollable={true}
        show={show}
        size="lg"
        onHide={() => onHide(true)}
        centered
      >
        <ModalHeader closeButton onHide={() => onHide(true)}>
          <ModalTitle>Select Data</ModalTitle>
        </ModalHeader>
        <ListGroup variant="flush">
          {checkedData.map((element, index) => (
            <ListGroupItem
              key={index}
              action
              onClick={() => {
                checkedData[index].checked = !element.checked;
                this.setState({ checkedData });
              }}
            >
              <div className="form-check">
                <input
                  onChange={() => {}}
                  type="checkbox"
                  className="form-check-input"
                  checked={element.checked}
                />
                <label className="form-check-label">
                  {renderItem(element.data)}
                </label>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        <ModalFooter>
          {validationError !== "" && (
            <Alert variant="danger">{validationError}</Alert>
          )}
          <Button
            variant="primary"
            onClick={() => {
              const selectedData = checkedData
                .filter((element) => element.checked)
                .map((element) => element.data);

              if (validateData) {
                if (validateData(selectedData)) onHide(false, selectedData);
                else
                  this.setState({
                    validationError: getValidationError
                      ? getValidationError(selectedData)
                      : "An error occured",
                  });
              } else {
                onHide(false, selectedData);
              }
            }}
          >
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
