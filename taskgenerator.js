// U92725213

import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep pushing forward!",
  "You can do it!",
  "Every step counts!",
  "Stay positive and strong!",
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentMotivationIndex, setCurrentMotivationIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
    setCurrentMotivationIndex((prevIndex) => (prevIndex + 1) % motivationalMessages.length);
  };

  const markTaskCompleted = () => {
    tasks[currentTaskIndex].isCompleted = true;
    nextTask();
  };

  const currentTask = tasks[currentTaskIndex];
  const currentMotivation = motivationalMessages[currentMotivationIndex];

  return (
    <div>
      <FancyText title text={`Task ${currentTask.id}`} />
      <FancyText text={`Name: ${currentTask.name}`} />
      <FancyText text={`Status: ${currentTask.isCompleted ? 'Completed ✔' : 'Pending'}`} />
      <FancyText text={`Motivation: ${currentMotivation}`} />
      <button onClick={markTaskCompleted}>Complete Task</button>
      <button onClick={nextTask}>Next Task</button>
    </div>
  );
};

export default TaskGenerator;
