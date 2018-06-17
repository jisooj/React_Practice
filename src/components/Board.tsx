// src/components/Board.tsx

import * as React from 'react';
import Comment from './Comment';
import './Comment.css';

interface IBoardState {
    comments: string[];
}

class Board extends React.Component<any, IBoardState> {
    constructor(props: any) {
        super(props);
        this.state = {
            comments: []
        };
        this.getComment = this.getComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    public updateComment(newText: string, i: number): void {
        this.state.comments[i] = newText;
        this.setState({ comments: this.state.comments });
    }

    public removeComment(i: number): void {
        this.state.comments.splice(i, 1);
        this.setState({ comments: this.state.comments });
    }

    public getComment(text: string, i: number): React.ReactNode {
        return (
            <Comment 
                key={i} 
                index={i}
                updateComment={this.updateComment}
                removeComment={this.removeComment}>
                {text}
            </Comment>
        );
    }

    public addComment(text: string): void {
        this.state.comments.push(text);
        this.setState({ comments: this.state.comments });
    }

    public render(): React.ReactNode {
        return (
            <div className="container">
                <button className="btn btn-info commentAdd" onClick={this.addComment.bind(null, "Default text")}>Add</button>
                <div className="board">
                {
                    this.state.comments.map(this.getComment)
                }
                </div>
            </div>
        );
    }
}

export default Board;
