import React from 'react'

export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
};


export const formatDate = date => {
  const newDate = new Date(date);
  const option = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return newDate.toLocaleDateString('en-US', option);

}

