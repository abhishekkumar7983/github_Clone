import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ProjectsLinks } from './ProjectsLinks';
import followerImg from '../../images/followers.png';

function Myproject() {
  const { userId } = useParams();
  const data = useLoaderData(userId);
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSort, setSelectedSort] = useState('name'); // Default sorting by project name
  const [selectedLanguage, setSelectedLanguage] = useState('');

  function handleClick() {
    window.open(data.html_url, `https://github.com/${userId}`);
  }

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${userId}/repos`);
        const repos = await reposResponse.json();
        console.log(repos);

        // Fetch language data for each repository
        const reposWithLanguages = await Promise.all(repos.map(async (repo) => {
          const languageResponse = await fetch(repo.languages_url);
          const languagesData = await languageResponse.json();
          const languages = Object.keys(languagesData);
          return { ...repo, languages };
        }));

        setInfo(reposWithLanguages);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, [userId]);

  const getSortedProjects = () => {
    return info
      .filter(project => (
        (selectedType === 'all' || project.private === (selectedType === 'private')) &&
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLanguage ? project.languages.includes(selectedLanguage) : true)
      ))
      .sort((a, b) => {
        if (selectedSort === 'name') {
          return a.name.localeCompare(b.name);
        } else if (selectedSort === 'date') {
          return new Date(b.created_at) - new Date(a.created_at);
        }
        // Add more sorting options if needed
        return 0;
      });
  };
  const uniqueLanguages = [...new Set(info.map(project => project.language))].filter(Boolean);

  return (
    <div className='flex'>
      <div className='ml-16 mt-5 mb-5'>
        <h1 className='font-bold text-3xl p-4'>Total Projects ({data?.public_repos})</h1>
        <div>
          <img className='rounded-full overflow-hidden w-64' src={data?.avatar_url} alt="my picture" width={300} />
        </div>
        <div className='text-2xl mt-5'>{data?.login}</div>
        <button
          onClick={handleClick}
          className="bg-gray-100 hover:bg-gray-400 text-black font-bold py-2 px-16 rounded mt-5 border shadow-sm"
        >
          See profile
        </button>
        <div className='flex mt-4'>
        <div><img src={followerImg} width={20} alt="followers icon" /></div>
          <span className='mr-5 ml-1'>followers {data?.followers}</span>
          <span>following {data?.following}</span>
        </div>
      </div>

      <div className='flex-1 ml-10 mt-5'>
        <input
          type='text'
          placeholder='Search in my projects'
          className='w-1/2 px-2 py-1 rounded border'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className='ml-5 px-2 py-1 rounded border'
        >
          <option value='all'>All</option>
          <option value='public'>Public</option>
          <option value='private'>Private</option>
        </select>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className='ml-2 px-2 py-1 rounded border'
        >
          <option value=''>All Languages</option>
          {uniqueLanguages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          className='ml-2 px-2 py-1 rounded border'
        >
          <option value='name'>Sort by Name</option>
          <option value='date'>Sort by Date</option>
          {/* Add more sorting options if needed */}
        </select>
        
        <hr className='mt-5 mr-48' />
        <ProjectsLinks userId={userId} repoData={getSortedProjects()} />
      
      </div>
    </div>
  );
}

export default Myproject;

export const myrepo = async (params) => {
  console.log("params:",params)
  const userId =params.params.userId;
  console.log("userid",userId);
  const response = await fetch(`https://api.github.com/users/${userId}`);
  return response.json();
};




// updated_at
