import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Components/Button';
import Display from './Components/Display';

export default class App extends React.Component {

	state = {
		displayValue: '0',
		valor: [],
		operador: [],
		operacao: ''
	}

	addDigito = n => {
		this.setState({ displayValue: Number(this.state.displayValue.toString() + n) });
		this.setState({ operacao: this.state.operacao + n });
	}

	cleanMemory = () => {
		this.setState({ valor: [] });
		this.setState({ displayValue: '0' });
		this.setState({ operacao: '' });
	}

	setOperation = operation => {
		this.state.valor.push(Number(this.state.displayValue));
		this.state.operador.push(operation);

		this.setarValorDisplay();
	}	
		
	setarValorDisplay = () => {
		this.state.valor.forEach( (n, i) => {
			this.setState({ operacao: this.state.operacao + n + this.state.operador[i] })
		});
		// this.setState({ displayValue: 
		// 	Number(eval(this.state.valor[0] + this.state.operador + this.state.valor[1])) 
		// });
	}
	
	resultado = () => {
		if(this.state.valor.length === 1){
			this.state.valor.push(Number(this.state.displayValue));
			
			
			
			this.setState({valor: []});
			this.setState({ operador: '' })
			this.state.valor.push(this.state.displayValue);
		}
	}

	render(){

		return (
			<View style={ styles.container }>
				<Display value={ this.state.displayValue } operacao={ this.state.operacao }></Display>
				<View style={ styles.buttons } >
					<Button label='AC' triple onClick={ this.cleanMemory }></Button>
					<Button label='/' operation onClick={ this.setOperation }></Button>
					<Button label='7' onClick={ this.addDigito }></Button>
					<Button label='8' onClick={ this.addDigito } ></Button>
					<Button label='9' onClick={ this.addDigito } ></Button>
					<Button label='*' operation onClick={ this.setOperation}></Button>
					<Button label='4' onClick={ this.addDigito } ></Button>
					<Button label='5' onClick={ this.addDigito } ></Button>
					<Button label='6' onClick={ this.addDigito } ></Button>
					<Button label='-' operation onClick={ this.setOperation } ></Button>
					<Button label='1' onClick={ this.addDigito } ></Button>
					<Button label='2' onClick={ this.addDigito } ></Button>
					<Button label='3' onClick={ this.addDigito } ></Button>
					<Button label='+' operation onClick={ this.setOperation } ></Button>
					<Button label='0' double onClick={ this.addDigito } ></Button>
					<Button label='.' onClick={ this.addDigito } ></Button>
					<Button label='=' operation onClick={ this.resultado }></Button>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		flexWrap: 'wrap',

	}
});