import * as React from "react";
import { IDigitBoxState } from "./IDigitBoxState";
import { IDigitBoxProps } from "./IDigitBoxProps";
import styles from "./DigitBox.module.scss";

class DigitBox extends React.Component<IDigitBoxProps, IDigitBoxState> {
  constructor(props: IDigitBoxProps) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles.digitBox}`}>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default DigitBox;
