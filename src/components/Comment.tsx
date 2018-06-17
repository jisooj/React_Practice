// src/components/Comment.tsx

import * as React from 'react';
import '../resources/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.css'
import './Comment.css';

interface IProps {
    children: any;
    index: number;
    updateComment: (newText: string, i: number) => void;
    removeComment: (i: number) => void;
}

interface IState {
    editing: boolean;
}

class Comment extends React.Component<IProps, IState> {
    private newText: React.RefObject<HTMLTextAreaElement>;

    constructor(props: IProps) {
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.newText = React.createRef();
    }

    public render(): React.ReactNode {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }

    public renderForm(): React.ReactNode {
        return (
            <div className="commentContainer">
                <div>
                    <textarea className="commentNewText" ref={this.newText} defaultValue={this.props.children} />
                </div>
                <button className="commentSave btn btn-success" onClick={this.save}>Save</button>
            </div>
        );
    }

    public renderNormal(): React.ReactNode {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button className="commentEdit btn btn-primary" onClick={this.edit}>Edit</button>
                <button className="commentRemove btn btn-danger" onClick={this.remove}>Remove</button>
            </div>
        );
    }

    public edit(): void {
        this.setState({ editing: true });
    }

    public save(): void {
        this.props.updateComment(this.newText.current!.value, this.props.index);
        this.setState({ editing: false });
    }

    public remove(): void {
        this.props.removeComment(this.props.index);
    }
}

export default Comment;
