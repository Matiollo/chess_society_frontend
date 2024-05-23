import React, { useState } from 'react'
import './CreatePage.css'
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import * as Toggle from '@radix-ui/react-toggle';

const CreatePage = ({default_tab}) => {
  return (
    <div className='container create-page'>
        <Tabs.Root defaultValue={default_tab} className="TabsRoot">
            <Tabs.List className="TabsList grid w-full grid-cols-2">
                <Tabs.Trigger className='TabsTrigger left-TabsTrigger' value="single-game">Single game</Tabs.Trigger>
                <Tabs.Trigger className='TabsTrigger right-TabsTrigger' value="tournament">Tournament</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='TabsContent' value="single-game">
                <div className='create-form-holder'>
                    <form className='create-form' action=''>
                        <div className='create-form-section'>
                            <div className='create-form-item create-form-one-third'>
                                <h1>TYPE</h1>
                                <Select.Root defaultValue="Standard">
                                    <Select.Trigger className="SelectTrigger" aria-label="Food">
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
                            <div className='create-form-item create-form-one-third'>
                                <div className='create-form-header-holder'>
                                    <h1>COLOR</h1>
                                    <div className='create-form-tooltip'>
                                        <InfoCircledIcon />
                                        <span className='create-form-tooltip-text'>Choose your chess piece color</span>
                                    </div>
                                </div>
                                <Select.Root defaultValue="Random">
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
                                                    <SelectItem value="Random" select>Random</SelectItem>
                                                    <SelectItem value="White">White</SelectItem>
                                                    <SelectItem value="Black">Black</SelectItem>
                                                </Select.Group>   
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                            <div className='create-form-item create-form-one-third'>
                                <h1>RATED</h1>
                                <Toggle.Root className="Toggle" aria-label="Toggle italic" defaultPressed>
                                    <CheckIcon className='create-form-toggle-check-icon' />
                                </Toggle.Root>
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
                                    <input type='number' min='0' placeholder="Days" />
                                    <input type='number' min='0' placeholder="Hours" />
                                    <input type='number' min='0' placeholder="Minutes" />
                                    <input type='number' min='0' placeholder="Seconds" />
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
                                    <input type='number' min='0' placeholder="Days" />
                                    <input type='number' min='0' placeholder="Hours" />
                                    <input type='number' min='0' placeholder="Minutes" />
                                    <input type='number' min='0' placeholder="Seconds" />
                                </div>
                            </div>
                        </div>
                        <div className='create-form-section'>
                            <div className='create-form-item create-form-half'>
                                <div className='create-form-header-holder'>
                                    <h1>OPPONENT</h1>
                                    <div className='create-form-tooltip'>
                                        <InfoCircledIcon />
                                        <span className='create-form-tooltip-text'>It is also possible to invite an opponent with 
                                        a link you will get after creating the game</span>
                                    </div>
                                </div>
                                <div className='create-form-input'>
                                    <input type='text' placeholder="Username" />
                                </div>
                            </div>
                            <div className='create-form-item create-form-half'>
                                <button className='btn dark-btn create-form-submit-button' type='submit'>Create game</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Tabs.Content>
            <Tabs.Content className='TabsContent' value="tournament">
                <div className='create-form-holder'>
                    <form className='create-form' action=''>
                        <div className='create-form-section'>
                            <div className='create-form-item create-form-half'>
                                <div className='create-form-header-holder'>
                                    <h1>TITLE <span>(required)</span></h1>
                                </div>
                                <div className='create-form-input'>
                                    <input type='text' placeholder="Title" required />
                                </div>
                            </div>
                            <div className='create-form-item create-form-half'>
                                <h1>START <span>(required)</span></h1>
                                <div className='create-form-date-time-input'>
                                    <input type='date' required />
                                    <input type='time' required />
                                </div>
                            </div>
                        </div>
                        <div className='create-form-section'>
                            <div className='create-form-item create-form-half'>
                                <h1>DESCRIPTION</h1>
                                <div className='create-form-text-area'>
                                    <textarea id="description" rows={2} placeholder="Description" />
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
                                <div className='create-form-break'>
                                    <input type='number' min='0' placeholder="Hours" />
                                    <input type='number' min='0' placeholder="Minutes" />
                                </div>
                            </div>
                        </div>
                        <div className='create-form-section'>
                            <div className='create-form-item create-form-half'>
                                <h1>TYPE</h1>
                                <Select.Root defaultValue="Standard">
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
                                <Toggle.Root className="Toggle" aria-label="Toggle italic" defaultPressed>
                                    <CheckIcon className='create-form-toggle-check-icon' />
                                </Toggle.Root>
                            </div>
                            <div className='create-form-item create-form-fourth'>
                                <h1>PUBLIC</h1>
                                <Toggle.Root className="Toggle" aria-label="Toggle italic" defaultPressed>
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
                                <div className='create-form-range'>
                                    <input type='number' min='1' placeholder="Min" />
                                    <input type='number' min='1' placeholder="Max" />
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
                                <div className='create-form-range'>
                                    <input type='number' min='1' placeholder="Min" />
                                    <input type='number' min='1' placeholder="Max" />
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
                                    <input type='number' min='0' placeholder="Days" />
                                    <input type='number' min='0' placeholder="Hours" />
                                    <input type='number' min='0' placeholder="Minutes" />
                                    <input type='number' min='0' placeholder="Seconds" />
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
                                    <input type='number' min='0' placeholder="Days" />
                                    <input type='number' min='0' placeholder="Hours" />
                                    <input type='number' min='0' placeholder="Minutes" />
                                    <input type='number' min='0' placeholder="Seconds" />
                                </div>
                            </div>
                        </div>
                        <div className='create-form-section'>
                            <div className='create-form-item create-form-half'>
                                <div className='create-form-header-holder'>
                                    <h1>PARTICIPANTS</h1>
                                    <div className='create-form-tooltip'>
                                        <InfoCircledIcon />
                                        <span className='create-form-tooltip-text'>Enter usernames of people you want to invite</span>
                                    </div>
                                    <div className='create-form-tooltip'>
                                        <InfoCircledIcon />
                                        <span className='create-form-tooltip-text'>It is also possible to invite participants with 
                                        a link you will get after creating the tournament</span>
                                    </div>
                                </div>
                                <div className='create-form-input'>
                                    <input type='text' placeholder="Username" />
                                </div>
                            </div>
                            <div className='create-form-item create-form-half'>
                                <button className='btn dark-btn create-form-submit-button' type='submit'>Create tournament</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Tabs.Content>
        </Tabs.Root>
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

export default CreatePage