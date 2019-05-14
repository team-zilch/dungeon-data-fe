import React, {Component, Fragment} from 'react';

export default class AboutGame extends Component {
  render () {
    return (
      <Fragment>
        <div className="about-game">
          <h2>About the Game</h2>
          <p>The first Dungeons & Dragons game was played   back when Gary Gygax and Dave Arneson chose to  personalize the massive battles of their fantasy   wargames with the exploits of individual heroes.  This inspiration became the first fantasy  roleplaying game, in which players are   characters in an ongoing fantasy story. This new  kind of game has become immensely popular over   the years, and D&D has grown to include many new  ways to vividly experience worlds of heroic  fantasy.</p>

          <p>The core of D&D is storytelling. You and your  friends tell a story together, guiding your  heroes through quests for treasure, battles with   deadly foes, daring rescues, courtly intrigue,  and much more. You can also explore the world of   Dungeons & Dragons through any of the novels  written by its fantasy authors, as well as   engaging board games and immersive video games.   All of these stories are part of D&D.</p>

          <p>Reference: <a href="http://dnd.wizards.com/dungeons-and-dragons/what-is-dd">http://dnd.wizards.com/dungeons-and-dragons/what-is-dd</a></p>

          <h2>How to Play</h2>
          <p>Player must create a character. In (D&D), each character has a set of ability scores that make it unique. They roll a character by rolling dice, three six-sided dice for each ability, which gives a score of 3 to 18 for each one. To other stats that are important are Amor Class and Hit Points. These numbers affect how a character works in a range of classes, or types.</p>
          <p>After the stats are generated a plyaer can then decide on a fantasy race (Human, Dwarf, Elf, Gnome, etc.), a class (Fighter, Mage, Thief, Druid, etc.), and an alignment which dictates how a player character interacts with the world.
          </p>
          <p>D&D uses six polyhedral dice, with four, six, eight, 10, 12 and 20 faces. These dice are central to D&D's game mechanics; they're what you use to figure out if what players trying to do fails or not.</p>
          <p>When a player rolls, they and the DM will be comparing results to a number found in one of the game's manuals. That comparison will determine the action's outcome</p>

          <p>This is a basic rundown on the game.</p>

          {/* <h2>History</h2>
          <ul className="about-game_main">
            <li>
              <h3>1967</h3>
              <ul>
                <li>
                The International Federation of Wargaming (IFW), founded by Gary Gygax and others, provides a venue for wargame fans to exchange ideas and amateur game designs.
                </li>
              </ul>
            </li>
            <li>
              <h3>1968</h3>
              <ul>
                <li>
                Gygax hosts the first Lake Geneva Wargames Convention, or Gen Con, in the Horticultural Hall of his home town of Lake Geneva, Wisconsin, as an IFW event.
                </li>
              </ul>
            </li>
            <li>
              <h3>1969</h3>
              <ul className="about-game_sub">
                <li>
                Gygax meets Dave Arneson at the second Gen Con, and the two express a mutual interest in collaborating on game rules.
                </li>
              </ul>
            </li>
            <li>
              <h3>1971</h3>
              <ul className="about-game_sub">
                <li>
                Gygax meets Dave Arneson at the second Gen Con, and the two express a mutual interest in collaborating on game rules.
                </li>
              </ul>
            </li>
            <li>
              <h3>1972</h3>
              <ul className="about-game_sub">
                <li>
                Gygax meets Dave Arneson at the second Gen Con, and the two express a mutual interest in collaborating on game rules.
                </li>
              </ul>
            </li>
            <li>
              <h3>1973</h3>
              <ul className="about-game_sub">
                <li>
                Gygax meets Dave Arneson at the second Gen Con, and the two express a mutual interest in collaborating on game rules.
                </li>
              </ul>
            </li>
            <li>
              <h3>1974</h3>
              <ul className="about-game_sub">
                <li>
                Gygax meets Dave Arneson at the second Gen Con, and the two express a mutual interest in collaborating on game rules.
                </li>
              </ul>
            </li>
            <li>
              <h3>1975</h3>
              <ul className="about-game_sub">
                <li>
                Gygax meets Dave Arneson at the second Gen Con, and the two express a mutual interest in collaborating on game rules.
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
      </Fragment>
    );
  }
};