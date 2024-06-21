/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
 
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Calculadora Abelardo. ¿En qué puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const numeroUno = parseFloat(slots.numeroUno.value);
        const numeroDos = parseFloat(slots.numeroDos.value);

        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            const speakOutput = 'Ups!! ingresa correctamente los numeros.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }

        const resultado = numeroUno + numeroDos;
        const speakOutput = `Calculadora abelardo. El resultado de la suma de ${numeroUno} más ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    },
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const numeroUno = parseFloat(slots.numeroUno.value);
        const numeroDos = parseFloat(slots.numeroDos.value);

        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            const speakOutput = 'Ups!! Ingresa los numeros correctamente.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }

        const resultado = numeroUno - numeroDos;
        const speakOutput = `Calculadora abelardo. El resultado de la resta de ${numeroUno} menos ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    },
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const numeroUno = parseFloat(slots.numeroUno.value);
        const numeroDos = parseFloat(slots.numeroDos.value);

        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            const speakOutput = 'Ups!! Ingresa los numeros correctamente.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }

        const resultado = numeroUno * numeroDos;
        const speakOutput = `Calculadora abelardo. El resultado de la multiplicacion de ${numeroUno} por ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    },
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const numeroUno = parseFloat(slots.numeroUno.value);
        const numeroDos = parseFloat(slots.numeroDos.value);

        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            const speakOutput = 'Ups!! Ingresa los numeros correctamente.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }

        const resultado = numeroUno / numeroDos;
        const speakOutput = `Calculadora abelardo. El resultado de la division de ${numeroUno} entre ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    },
};

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const { intent } = handlerInput.requestEnvelope.request;
        const base = parseFloat(intent.slots.base.value);
        const exponente = parseFloat(intent.slots.exponente.value);

        if (isNaN(base) || isNaN(exponente)) {
            const speakOutput = 'Ups!! Ingresa los numeros correctamente.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }

        const resultado = Math.pow(base, exponente);
        const speakOutput = `Calculadora Abelardo... El resultado de elevar ${base} a la potencia de ${exponente} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    },
};

const LogaritmoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LogaritmoIntent';
    },
    handle(handlerInput) {
        const { intent } = handlerInput.requestEnvelope.request;
        const numero = parseFloat(intent.slots.numero.value);

        if (isNaN(numero) || numero <= 0) { // El logaritmo natural no está definido para números no positivos
            const speakOutput = 'Ups!! Ingresa los numeros correctamente o numero no valido';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }

        const resultado = Math.log(numero);
        const speakOutput = `Calculadora Abelardo... El logaritmo natural de ${numero} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas hacer otra operacion?')
            .getResponse();
    },
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes pedirme que sume, reste, multiplique o divide dos numeros. ¿Cómo puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no pude entender lo que dijiste. Por favor intenta de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.';
        console.log(`Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        DivisionIntentHandler,
        MultiplicacionIntentHandler,
        PotenciaIntentHandler,
        LogaritmoIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();