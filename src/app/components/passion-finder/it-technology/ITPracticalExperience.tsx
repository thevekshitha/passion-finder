import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, Code, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITPracticalExperienceProps {
  specialization: string;
  onContinue: () => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

export function ITPracticalExperience({ specialization, onContinue, onBack, onTalkToMentor }: ITPracticalExperienceProps) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <NavigationBar 
          onBack={onBack} 
          onTalkToMentor={onTalkToMentor}
          mentorButtonColor="green"
        />

        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> ... <ChevronRight className="inline h-4 w-4 mx-1" /> Practical Experience
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Practical Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Try a real-world task to see if you enjoy the work.
          </p>
        </div>

        {/* Task Card */}
        <Card className="border-2 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Mini Task: Build a Simple Feature
                </h2>
                <p className="text-gray-600">
                  This is not a test. It's an experience to see how it feels to do this work.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Task: Create a To-Do List Interface (Concept)
              </h3>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Step 1: Design the Layout</p>
                  <p className="text-sm">Think about what a to-do list needs: input box, add button, list of tasks, delete option</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 2: Break Down Components</p>
                  <p className="text-sm">List out: Header, Input Form, Task Item, Task List</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 3: Think About User Actions</p>
                  <p className="text-sm">What happens when user clicks "Add"? How to delete a task? How to mark as complete?</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 4: Consider Edge Cases</p>
                  <p className="text-sm">What if user adds empty task? What if list is empty? How to show feedback?</p>
                </div>
              </div>
            </div>

            {/* Reflection Questions */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  While doing this, ask yourself:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Did thinking through this problem feel interesting or boring?</li>
                  <li>✓ Did you feel creative or frustrated?</li>
                  <li>✓ Could you imagine doing this kind of work daily?</li>
                  <li>✓ Did you want to dive deeper or were you already tired?</li>
                  <li>✓ Did problem-solving excite you or stress you?</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Sample Code (Optional View) */}
        <Card className="border-2 mb-8">
          <CardContent className="p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Sample Code Snippet (Just to See What Code Looks Like)
            </h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-x-auto">
              <pre>{`function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} 
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              This is React code. Notice how it breaks down into logic and UI. 
              Does reading this make you curious or overwhelmed?
            </p>
          </CardContent>
        </Card>

        {/* Mark as Done */}
        {!taskCompleted ? (
          <div className="text-center">
            <Button
              onClick={() => setTaskCompleted(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg"
            >
              I Tried This Task
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Card className="border-2 border-green-500 bg-green-50 mb-6 inline-block">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <p className="text-lg font-semibold text-gray-900">
                  Great! Now let's reflect on your experience.
                </p>
              </CardContent>
            </Card>

            <div>
              <Button
                onClick={onContinue}
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg"
              >
                Continue to Self-Reflection
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
