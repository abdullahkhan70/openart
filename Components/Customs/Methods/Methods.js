import React from 'react';
import {Text} from 'react-native';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const firstLetter = word => {
  return word.charAt(0).toUpperCase();
};
export const formattedDate = date => {
  const newDate = new Date(date);
  const currentMonth = newDate.getMonth();
  const currentDate = newDate.getDate();
  const currentYear = newDate.getFullYear();
  let currentHours = newDate.getHours();
  let currentMinutes = newDate.getMinutes();
  var ampm = currentHours >= 12 ? 'pm' : 'am';
  currentHours = currentHours % 12;
  currentHours = currentHours ? currentHours : 12; // the hour '0' should be '12'
  currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
  var strTime = currentHours + ':' + currentMinutes + ' ' + ampm;
  console.log(strTime);
  return (
    months[currentMonth] +
    ' ' +
    currentDate +
    ', ' +
    currentYear +
    ' at ' +
    strTime
  );
};

export const CustomText = props => {
  const text = props.text.split(' ');
  return (
    <Text adjustsFontSizeToFit style={props.textStyles}>
      {text.map(text => {
        if (
          text.startsWith(props.textChangeTwo) ||
          text.startsWith(props.textChange)
        ) {
          return (
            <Text
              adjustsFontSizeToFit
              key={props.key}
              style={{color: props.color, fontWeight: props.fontWeight}}>
              {text}{' '}
            </Text>
          );
        }
        if (text.startsWith(props.userNameText)) {
          return (
            <Text
              adjustsFontSizeToFit
              key={props.key}
              style={{
                color: props.userNameColor,
                fontWeight: props.userNameFontWeight,
              }}>
              {text}{' '}
            </Text>
          );
        }
        return `${text} `;
      })}
    </Text>
  );
};
