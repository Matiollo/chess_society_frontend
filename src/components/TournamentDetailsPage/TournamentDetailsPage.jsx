import React from 'react'
import "./TournamentDetailsPage.css"
import { InfoCircledIcon } from '@radix-ui/react-icons';
import moment from 'moment';
import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';

const rounds = [
    {
      title: 'Round 1',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'kudos' }, { name: 'onee1' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'daean' }, { name: 'frankyyy' }],
        },
        {
            id: 1,
            date: new Date().toDateString(),
            teams: [{ name: '4win' }, { name: 'catlover' }],
        },
        {
            id: 2,
            date: new Date().toDateString(),
            teams: [{ name: 'chess_fun' }, { name: '' }],
        },
      ],
    },
    {
      title: 'Round 2',
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: '' }, { name: '' }],
        },
        {
            id: 3,
            date: new Date().toDateString(),
            teams: [{ name: '' }, { name: 'chess_fun' }],
          },
      ],
    },
    {
        title: 'Round 3',
        seeds: [
          {
            id: 3,
            date: new Date().toDateString(),
            teams: [{ name: '' }, { name: '' }],
          },
        ],
      },
  ];

const data = {
    id: 1, 
    title: "Berserk tournament",
    organizer_username: "kudos",
    body: "Hello, everyone! My name is kudos, and I am happy to greet you here. I am organizing this tournament for the best reason ever - because I want to :) Come join me if you'd like ",
    type: "Standard",
    status: "Upcoming",
    start: "2024-06-24T15:30:00Z",
    time_per_player: 10,
    time_per_move: "Unlimited",
    break_time: 10,
    min_rating: 1200,
    max_rating: 1600,
    min_players: 5,
    max_players: 20,
    participants: 7,
    private: false,
    rated: true
}

const TournamentDetailsPage = () => {

    const formatDateTime = (datetime) => {
        const date = moment(datetime);
        const formattedDate = date.format('LL');   
        const formattedTime = date.format('LT');   
        return {
            date: formattedDate,
            time: formattedTime
        };
    };

    const { datetime } = data.start;
    const formattedDateTime = formatDateTime(datetime);

    const CustomSeed = ({seed, breakpoint}) => {
        return (
          <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
            <SeedItem>
              <div>
                <SeedTeam style={{ background: '#181818' }}>{seed.teams[0]?.name || ' --- '}</SeedTeam>
                <SeedTeam style={{ background: '#303030' }}>{seed.teams[1]?.name || ' --- '}</SeedTeam>
              </div>
            </SeedItem>
          </Seed>
        );
    };

  return (
    <div className='tournament-details-page container'>
        <div className='tournament-details-page-wrapper'>
            <div className='tournament-details-page-section'>
                <div className='tournament-details-header'>
                    <div>
                        <h1>{data.title}</h1>
                        <span>{data.status}</span>
                    </div>
                    <h2>by {data.organizer_username}</h2>
                </div>
            </div>
            <div className='tournament-details-page-section-two'>
                <div className='tournament-details-page-section-half'>
                    <div className='tournament-details-page-subsection'>
                        <div className='tournament-details-page-item'>
                                <h1>TYPE</h1>
                                <p>{data.type}</p>
                        </div>
                        <div className='tournament-details-page-item'>
                            <h1>PUBLIC</h1>
                            <p>{data.private ? 'No' : 'Yes'}</p>
                        </div>
                        <div className='tournament-details-page-item'>
                            <h1>RATED</h1>
                            <p>{data.rated ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                    <div className='tournament-details-page-subsection'>
                        <div className='tournament-details-page-item'>
                            <h1>START</h1>
                            <p>{formattedDateTime.date} {formattedDateTime.time}</p>
                        </div>
                    </div>
                    <div className='tournament-details-page-subsection'>
                        <div className='tournament-details-page-item'>
                            <h1>PER PLAYER</h1>
                            <p>{data.time_per_player}</p>
                        </div>
                        <div className='tournament-details-page-item'>
                            <h1>PER MOVE</h1>
                            <p>{data.time_per_move}</p>
                        </div>
                        <div className='tournament-details-page-item'>
                            <h1>BREAK</h1>
                            <p>{data.break_time}</p>
                        </div>
                    </div>
                </div>
                <div className='tournament-details-page-section-half'>
                    <div className='tournament-details-page-subsection'>
                        <div className='tournament-details-page-item'>
                            <h1>DESCRIPTION</h1>
                            <p>{data.body}</p>
                        </div>
                    </div>
                    <div className='tournament-details-page-subsection'>
                        <div className='tournament-details-page-item'>
                            <h1>RATING</h1>
                            <p>{data.min_rating} - {data.max_rating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tournament-details-page-section-three'>
                <div className='tournament-details-page-participants-wrapper'>
                    <h1>PARTICIPANTS</h1>
                    <p className='tournament-details-page-participants'>{data.participants}</p>
                    <p className='tournament-details-page-participants-min-max'>Min: {data.min_players}</p>
                    <p className='tournament-details-page-participants-min-max'>Max: {data.max_players}</p>
                </div>
                <div className='tournament-details-page-brackets-wrapper'>
                    {/* <div className='tournament-details-page-header-holder'>
                        <h1>BRACKETS</h1>
                        <div className={`tournament-details-page-tooltip ${data.status == "Upcoming" ? '' : 'hidden'}`}>
                            <InfoCircledIcon />
                            <span className='tournament-details-page-tooltip-text'>Changes are possible before the beginning of the tournament</span>
                        </div>
                    </div> */}
                    <div className='tournament-details-page-brackets-holder'>                      
                        <Bracket 
                            rounds={rounds} 
                            roundTitleComponent={(title) => {
                                return <div style={{ textAlign: 'center', 'font-size': '14px' }}>{title}</div>;
                            }}
                            renderSeedComponent={CustomSeed}
                        />
                    </div>
                </div>
            </div>
            <div className='tournament-details-page-section-four'>
                <button className='btn tournament-details-page-button' type='submit'>Copy Invite Link</button>                
                <button className='btn dark-btn tournament-details-page-button' type='submit'>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default TournamentDetailsPage