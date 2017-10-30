/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.821e5713-2581-48b8-b83f-c27c3af00c3';

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'You make Patrick Star seem like Sir Patrick Stewart.',
                'Did you fall from heaven because your face looks like it got burned while falling through the atmosphere.',
                'You make post-curse Medusa look like Mona Lisa.',
                'Beauty lies in the eye of the beholder, but the beholder for you doesn\'t exist.',
                'You took the evolution step backwards.',
                'You believe acid rain is the sky tripping.',
                'You were born into your halloween costume for life.',
                'Are those space pants? Because you are astronomically huge.',
                'You could not break a heart even if you wanted to. Because you need to get attached first.',
                'Married life is not for everyone, but single life is definitely for you.',
                'Has anyone ever told you how beautiful you are? Well, let me be the first.',
                'You put the \"end\" in Netflix and Chill.',
                'I would do a Yo Mamma joke, but your mother suffered enough by having you.',
            ],
            SKILL_NAME: 'Insults Wizard',
            GET_FACT_MESSAGE: "Here goes:",
            HELP_MESSAGE: 'You can say insult me, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
            WELCOME_MESSAGE: 'Welcome to the Insults Wizard! This is purely for fun and for people with a sense of self-deprecating humor. Consists of mostly original, possibly unfunny insults. This is not intended to cause harm to anyone in any way, and use at your own risk. Do not proceed further if you are in a sad mood, or are easily offended.',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
              'You make Patrick Star seem like Sir Patrick Stewart.',
              'Did you fall from heaven because your face looks like it got burned while falling through the atmosphere.',
              'You make post-curse Medusa look like Mona Lisa.',
              'Beauty lies in the eye of the beholder, but the beholder for you doesn\'t exist.',
              'You took the evolution step backwards.',
              'You believe acid rain is the sky tripping.',
              'You were born into your halloween costume for life.',
              'Are those space pants? Because you are astronomically huge.',
              'You could not break a heart even if you wanted to. Because you need to get attached first.',
              'Married life is not for everyone, but single life is definitely for you.',
              'Has anyone ever told you how beautiful you are? Well, let me be the first.',
              'You put the \"end\" in Netflix and Chill.',
              'I would do a Yo Mamma joke, but your mother suffered enough by having you.',
            ],
            SKILL_NAME: 'Disses',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', this.t('WELCOME_MESSAGE'));
        this.emit('GetBurned');
    },
    'GetBurnedIntent': function () {
        this.emit('GetBurned');
    },
    'GetBurned': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
