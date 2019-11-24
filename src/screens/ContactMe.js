import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {blogPosts} from './../Utils';
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SpeakImage from './SpeakImage.png';


const styles = {
	ContactMe: {
		width: '100%',
		padding: 20,
		margin: 20
	},
	media: {
	    height: 140,
	},
	card: {
		width: 'calc(100% - 40px)',
		marginBottom: 20
	}
}

class ContactMe extends React.Component {


/*	constructor(props){
		super(props);
		this.state = {
			postId : this.props.match.params.postId
		}
	}
*/
/*	componentDidMount(){
		if(!this.state.postId){
			this.props.history.goBack();
		}
	}
*/
	render(){ 
	  //const bPost = blogPosts[this.state.postId - 1];
	  const {classes} = this.props;
	  return (
	    <div className={classes.ContactMe}>
			<h1>Contact</h1>
			<p>Have something in your mind? </p> 
			<img style={{height: 300, alignSelf: 'flex', margin: 5}} src={SpeakImage}/>
			<p>Send an email <a href="mailto:rg49526n@pace.edu">here</a> to post it.</p>
	    </div>
	  );
	}
}

export default withRouter((withStyles(styles))(ContactMe));
