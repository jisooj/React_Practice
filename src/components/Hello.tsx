// src/components/Hello.tsx

import * as React from 'react';
import './Hello.css';

interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<IProps, object> {
  private pp: IProps;

  constructor(props: IProps) {
    super(props);
    this.pp = props;
  }
  public render() {
    // const { name, enthusiasmLevel = 1 } = this.props;
    const { name, enthusiasmLevel = 1 } = this.pp;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Hello;

function getExclamationMarks(enthusiasmLevel: number): string {
    return Array(enthusiasmLevel + 1).join("!");
}