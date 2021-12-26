import { useSelector } from 'react-redux';

import calculateExtroversionLevel, {
  EXTROVERT,
  INTROVERT,
} from '../../utils/calculateExtroversionLevel';

export default function ResultsPage() {
  const answers = useSelector((state) => state.personalityTest.answers);
  const extrovertion = calculateExtroversionLevel(answers);

  return (
    <div>
      <main>
        {extrovertion === EXTROVERT && (
          <div>
            <h1>You are more of an extrovert</h1>
            <p>
              Whether at work or at home, you are a leader, the head of the
              pack. You are the type of person who is at ease with everyone —
              with the grocer, the doctor, a managing director or a waiter. You
              have an opinion about just about everything and you like to share
              your knowledge around, even imposing it on others if they haven’t
              asked for it. Your personal and professional entourages easily
              class you as a ‘loud mouth’, sure about yourself, not in the least
              bit bothered about what others think of you and someone who
              occasionally likes to play the card of provocation. When you’re on
              a roll, it’s hard to sop you and the least that could be said is
              that listening skills are not one of your innate skills. In the
              couples arena, you have maybe fallen for someone with a similar
              temperament – making for animated evenings!
            </p>
          </div>
        )}
        {extrovertion === INTROVERT && (
          <div>
            <h1>You are more of an introvert</h1>
            <p>
              You feel that living alone is to live happily, and you prefer
              hiding in a crowd rather than standing out in one. You are
              perpetually tormented by the idea of doing things wrong, not
              understanding or not being alert enough or intelligent enough to
              do what others expect of you. You lack in self-confidence and you
              seem to believe that others are better than you. While in a
              conversation, for example, you would be more likely to go along
              with the other’s points of view as you don’t fully respect your
              own opinions. Where there’s a low level task to complete or a
              service to be allotted, it’s you who volunteers. When people want
              to get out of a task, they naturally come to you as they know that
              you never say ‘no’. It’s not surprising that you sometimes have
              the impression of being permanently exploited, but you don’t
              really know how to break this vicious circle.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
