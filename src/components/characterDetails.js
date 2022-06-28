import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { viewCharacterDetails } from '../redux/actions/listingActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CharacterDetails = () => {

  const params = useParams();
  const dispatch = useDispatch();

  const character_details = useSelector(state => state?.characters?.character_details?.docs[0] ? state?.characters?.character_details?.docs[0] : [])
  const character_id = useSelector(state => state?.characters?.character_id ? state?.characters?.character_id : "")

  useEffect(() => {
    dispatch(viewCharacterDetails(params?.id));
  }, [character_id])


  return (
    <div className='details-page'>

      <h2>characterDtails</h2>
      <div className="row">
        <label className='title'>Name: </label>
        <label className='content'> {character_details?.name ? character_details?.name : ""}</label>
      </div>
      <div className="row">
        <label className='title'>Race</label>
        <label className='content'> {character_details?.race ? character_details?.race : ""}</label>
      </div>
      <div className="row">
        <label className='title'>Gender</label>
        <label className='content'> {character_details?.gender ? character_details?.gender : "--"}</label>
      </div>
      <div className="row">
        <label className='title'>Height</label>
        <label className='content'> {character_details?.height}</label>
      </div>
      <div className="row">
        <label className='title'>Hair</label>
        <label className='content'> {character_details?.hair}</label>
      </div>
      <div className="row">
        <label className='title'>Realm</label>
        <label className='content'> {character_details?.realm ? character_details?.realm : "--"}</label>
      </div>
      <div className="row">
        <label className='title'>Birth</label>
        <label className='content'> {character_details?.birth ? character_details?.birth : "--"}</label>
      </div>
      <div className="row">
        <label className='title'>Spouse</label>
        <label className='content'> {character_details?.spouse}</label>
      </div>
      <div className="row">
        <label className='title'>Death</label>
        <label className='content'> {character_details?.death}</label>
      </div>

      <Link className='close-btn' to="/" >Close</Link>

    </div>
  )
}

export default CharacterDetails