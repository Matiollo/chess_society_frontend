import React from 'react'
import "./TournamentEdit.css"
import '../CreatePage/CreatePage.css'
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import * as Toggle from '@radix-ui/react-toggle';
import { IoArrowBackCircle } from "react-icons/io5"

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

const TournamentEdit = () => {
  return (
    <div className='tournament-edit container'>
      <div className='tournament-edit-wrapper'>
        <div className='tournament-edit-header'>
          <button><IoArrowBackCircle className='back-icon' /></button>
          <h1>{data.title}</h1>
        </div>
        <form className='create-form' action=''>
          <div className='create-form-section'>
              <div className='create-form-item create-form-half'>
                  <div className='create-form-header-holder'>
                      <h1>TITLE <span>(required)</span></h1>
                  </div>
                  <div className='tournament-edit-input'>
                      <input type='text' placeholder={data.title} required />
                  </div>
              </div>
              <div className='create-form-item create-form-half'>
                  <h1>START <span>(required)</span></h1>
                  <div className='create-form-date-time-input'>
                      <input type='date' />
                      <input type='time' />
                  </div>
              </div>
          </div>
          <div className='create-form-section'>
              <div className='create-form-item create-form-half'>
                  <h1>DESCRIPTION</h1>
                  <div className={`tournament-edit-text-area ${data.body == "" ? "" : "tournament-edit-filled"}`}>
                      <textarea id="description" rows={2} placeholder={data.body == "" ? "Description" : data.body} />
                  </div>
              </div>
              <div className='create-form-item create-form-half'>
                  <div className='create-form-header-holder'>
                      <h1>BREAK</h1>
                      <div className='create-form-tooltip'>
                          <InfoCircledIcon />
                          <span className='create-form-tooltip-text'>Duration of the break between rounds</span>
                      </div>
                      {/* ASTERISK */}
                  </div>
                  <div className='tournament-edit-break'>
                      <input type='number' min='0' placeholder={`${Math.floor(data.break_time/60)} hrs`} />
                      <input type='number' min='0' placeholder={`${data.break_time%60} mins`} />
                  </div>
              </div>
          </div>
          <div className='create-form-section'>
              <div className='create-form-item create-form-half'>
                  <h1>TYPE</h1>
                  <Select.Root defaultValue={data.type}>
                      <Select.Trigger className="SelectTrigger" aria-label="Type">
                          <Select.Value />
                          <Select.Icon className="SelectIcon">
                              <ChevronDownIcon />
                          </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                          <Select.Content className="SelectContent">
                              <Select.Viewport className="SelectViewport">
                                  <Select.Group>
                                      <SelectItem value="Standard" select>Standard</SelectItem>
                                      <SelectItem value="Marseillais">Marseillais</SelectItem>
                                      <SelectItem value="FisherRandom">Fisher Random</SelectItem>
                                  </Select.Group>    
                              </Select.Viewport>
                          </Select.Content>
                      </Select.Portal>
                  </Select.Root>
              </div>
              <div className='create-form-item create-form-fourth'>
                  <h1>RATED</h1>
                  <Toggle.Root className="Toggle" aria-label="Toggle italic" defaultPressed={data.rated} >
                      <CheckIcon className='create-form-toggle-check-icon' />
                  </Toggle.Root>
              </div>
              <div className='create-form-item create-form-fourth'>
                  <h1>PUBLIC</h1>
                  <Toggle.Root className="Toggle" aria-label="Toggle italic" defaultPressed={!data.private}>
                      <CheckIcon className='create-form-toggle-check-icon' />
                  </Toggle.Root>
              </div>
          </div>
          <div className='create-form-section'>
              <div className='create-form-item create-form-half'>
                  <div className='create-form-header-holder'>
                      <h1>NUMBER OF PLAYERS</h1>
                      <div className='create-form-tooltip'>
                          <InfoCircledIcon />
                          <span className='create-form-tooltip-text'>Leave fields empty if no min or max limits needed</span>
                      </div>
                  </div>
                  <div className='tournament-edit-range'>
                      <input className={data.min_players == 0 ? "" : "filled"} type='number' min='1' placeholder={data.min_players == 0 ? "Min" : data.min_players} />
                      <input className={data.max_players == "Unlimited" ? "" : "filled"} type='number' min='1' placeholder={data.max_players == "Unlimited" ? "Max" : data.max_players} />
                      <label className='create-form-separator'>/</label>
                  </div>
              </div>
              <div className='create-form-item create-form-half'>
                  <div className='create-form-header-holder'>
                      <h1>RATING LIMITS</h1>
                      <div className='create-form-tooltip'>
                          <InfoCircledIcon />
                          <span className='create-form-tooltip-text'>Leave fields empty if no min or max limits needed</span>
                      </div>
                  </div>
                  <div className='tournament-edit-range'>
                      <input className={data.min_rating == "Unlimited" ? "" : "filled"} type='number' min='1' placeholder={data.min_rating == "Unlimited" ? "Min" : data.min_rating} />
                      <input className={data.max_rating == "Unlimited" ? "" : "filled"} type='number' min='1' placeholder={data.max_rating == "Unlimited" ? "Max" : data.max_rating} />
                      <label className='create-form-separator'>/</label>
                  </div>
              </div>
          </div>
          <div className='create-form-section'>
              <div className='create-form-item'>
                  <div className='create-form-header-holder'>
                      <h1>TIME PER PLAYER</h1>
                      <div className='create-form-tooltip'>
                          <InfoCircledIcon />
                          <span className='create-form-tooltip-text'>Leave fields empty for unlimited time</span>
                      </div>
                  </div>
                  <div className='create-form-time'>
                      <input className={data.time_per_player == "Unlimited" || Math.floor(data.time_per_player/1440) == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_player == "Unlimited" || Math.floor(data.time_per_player/1440) == 0 ? "Days" : Math.floor(data.time_per_player/1440)} />
                      <input className={data.time_per_player == "Unlimited" || Math.floor((data.time_per_player%1440)/60) == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_player == "Unlimited" || Math.floor((data.time_per_player%1440)/60) == 0 ? "Hours" : Math.floor((data.time_per_player%1440)/60)} />
                      <input className={data.time_per_player == "Unlimited" || Math.floor(data.time_per_player%60) == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_player == "Unlimited" || Math.floor(data.time_per_player) == 0 ? "Minutes" : Math.floor(data.time_per_player%60)} />
                      <input className={data.time_per_player == "Unlimited" || data.time_per_player == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_player == "Unlimited" || data.time_per_player == 0 ? "Seconds" : 60*(data.time_per_player - Math.floor(data.time_per_player))} />
                  </div>
              </div>
          </div>
          <div className='create-form-section'>
              <div className='create-form-item'>
                  <div className='create-form-header-holder'>
                      <h1>TIME PER MOVE</h1>
                      <div className='create-form-tooltip'>
                          <InfoCircledIcon />
                          <span className='create-form-tooltip-text'>Leave fields empty for unlimited time</span>
                      </div>
                  </div>
                  <div className='create-form-time'>
                      <input className={data.time_per_move == "Unlimited" || Math.floor(data.time_per_move/1440) == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_move == "Unlimited" || Math.floor(data.time_per_move/1440) == 0 ? "Days" : Math.floor(data.time_per_move/1440)} />
                      <input className={data.time_per_move == "Unlimited" || Math.floor((data.time_per_move%1440)/60) == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_move == "Unlimited" || Math.floor((data.time_per_move%1440)/60) == 0 ? "Hours" : Math.floor((data.time_per_move%1440)/60)} />
                      <input className={data.time_per_move == "Unlimited" || Math.floor(data.time_per_move%60) == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_move == "Unlimited" || Math.floor(data.time_per_move) == 0 ? "Minutes" : Math.floor(data.time_per_move%60)} />
                      <input className={data.time_per_move == "Unlimited" || data.time_per_move == 0 ? "" : "filled"} type='number' min='0' placeholder={data.time_per_move == "Unlimited" || data.time_per_move == 0 ? "Seconds" : 60*(data.time_per_player - Math.floor(data.time_per_move))} />
                  </div>
              </div>
          </div>
          <div className='tournament-edit-section'>
              <button className='btn grey-btn tournament-edit-button'>Delete tournament</button>
              <button className='btn dark-btn tournament-edit-button' type='submit'>Save changes</button>
          </div>
      </form>
      </div>
    </div>
  )
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
      <Select.Item className='SelectItem' {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
      </Select.ItemIndicator>
      </Select.Item>
  );
});

export default TournamentEdit